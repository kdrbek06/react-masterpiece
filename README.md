# Real Meal : The Real Deal ! 
[The Real Meal Website Here ](https://real-meal.netlify.app/)
## P2P Food Sharing Platform
    Made in React with TypeScript and Tailwind CSS. 

Welcome to to our React Project where we combined forces to create a food order platform where we tried to create a credible project ready to sell to customers. Deadline was one month, followed by a pitch to our coaches were we present and sell this project. This is how we made it : 

## Folder Structure & Main Components :
    App.tsx
        MainPage.tsx
        MainCarousel.tsx
        Reviews.tsx
        CookDetails.tsx
        Menus.tsx
        MenuOverview.tsx
        Login.tsx
## React Router DOM : 
     <MenuContextProvider>
      <div className="App">
        <Router>
          <Navbar/>
          <Switch>
            <Route path="/" exact component={MainPage}></Route>
            <Route path="/reviews" component={Reviews}></Route>
            <Route path="/cookdetails/:id" component={CookDetails}></Route>
            <Route path="/menus" component={Menus}></Route>
            <Route path="/menu" component={MenuOverview}></Route>
            <Route path="/login" component={Login}></Route>
          </Switch>
        </Router>
        <Footer/>
      </div>
    </MenuContextProvider>

## Databases and Session Storage : 
we applied different strategies to retrieve our data, useContext beeing a brand new concept. Read more about this React hook further in this article and added documents. <br>
### We used : 
    - JSON files (Cooks and Reviews props)
    - Local Storage (to keep user input after refresh)
    - useContext React Hook (Menu props)

### Approach and special techniques used :  
    - we destructured Object per Object so we can disect the props. 
    - Declare props
    - Assign props to corresponding State
    - Pass the props through the needed component
    - map the props to get the complete overview of the data 
    - return the map through the parent component.

# useContext() and ContextProvider in React :

There is a cool hook in React that remember the props as a hook, which make them easy to inject in other components. This avoids the constant deconstructuring that is often needed when creating new components. One hook to rule them all ! I have written an ellaborate guide on this on Dev.to, which i will add at the bottom of the ReadMe. Here is the main take away : 
## initial Routing : 
    
    
    function App () {
    <>
    <div className="App>
        <Router>
        <Navbar>
        <Switch>
            <Route path="/menus" component={Menus}></Route>
        <Switch>
        <Navbar>
        <Router>
        <Footer>
    </div>
    </>
    }
    
Important before you proceed is making an action plan, by dedicating the correct Parent & Children. For our menu this will be as followed :

    <Menus> = Parent Component 
    -(redirected from App with Route to component={Menus}.)
        <MenuCard> = Child component 
    -(This will be the "card" for the COMPLETE week. 
            <AddForm> = Child Component 
    -( We need this later in a modal to edit the data )

We will need a Provider to "inject" other components with it's props.
This means once you pass the props in a component, this comp will be "Provided" with the needed data !
Here we call it MenuContextProvider because obviously we are working on a Menu.

## How the useContext looks : 
 
    import { createContext, useEffect, useState } from "react";
    import { v4 as uuidv4 } from 'uuid';

    export const MenuContext = createContext< any | undefined>(undefined);

    const MenuContextProvider = (props) => {

        const [menus, setMenus] = useState([
            { id: uuidv4(), day:"Monday", nameStarter: "Pôtage du jour", priceStarter: 4.20, nameMain: "Pomme d'amour", priceMain: 6.90 , nameDessert: "Salade du fruits", priceDessert: 4.20, totalPrice: 13.50, },
            { id: uuidv4(), day: "Tuesday", nameStarter: "Croquette crevette", priceStarter: 4.20 ,nameMain: "Moules Frites", priceMain: 6.90 , nameDessert: "Mousse au chocolat", priceDessert: 4.20, totalPrice: 13.50, },
            { id: uuidv4(), day: "Wednesday", nameStarter: "Croquette fromage", priceStarter: 4.20 , nameMain: "Pain Saucisse", priceMain: 6.90 , nameDessert: "Mousse au fraise", priceDessert: 4.20, totalPrice: 13.50, }, 
            { id: uuidv4(), day: "Thursday", nameStarter: "Croquette duo", priceStarter: 4.20 , nameMain: "Pain Fromage", priceMain: 6.90 , nameDessert: "Mousse au Camembert", priceDessert: 4.20, totalPrice: 13.50, },
            { id: uuidv4(), day: "Friday", nameStarter: "Cocktail of crevettes", priceStarter: 4.20 , nameMain: "Panette poison", priceMain: 6.90 , nameDessert: "Mousse au Brie", priceDessert: 4.20, totalPrice: 13.50, },
            { id: uuidv4(), day: "Saturday", nameStarter: "Carpaccio", priceStarter: 4.20 , nameMain: "Pain Jambon", priceMain: 6.90 , nameDessert: "Tiramisu", priceDessert: 4.20, totalPrice: 13.50, }
        ])


        return(
            <MenuContext.Provider value={{menus}}>
                {props.children}
            </MenuContext.Provider>
        )
    }
    export {MenuContextProvider};

# Cooks and Reviews : 

## The card we used for each cook
    <div className="flex flex-col w-full sm:w-4/5 md:w-72  m-4 p-4 rounded-2xl bg-white bg-opacity-90 transition duration-500 ease-in-out hover:bg-gray-200 transform hover:-translate-y-1 hover:scale-110">

      <img className="rounded-full m-auto mb-6 w-32 h-32" src={require(`./../image/${image}`).default} alt="" />
      <p>{name}</p>
      <p className="m-6">{description}</p>
      <Link to={`/Cookdetails/${id}`} className="m-2 p-2 bg-gray-200 rounded-full transition duration-500 ease-in-out hover:bg-darkkhaki" >Go to details</Link>

    </div >


## Reviews cards fetch the data from json file

    <div className="testimonial w-full sm:w-1/2 text-center flex flex-col justify-between	my-6 p-6 sm:mx6 bg-white bg-opacity-40 hover:border-indigo-400 hover:bg-indigo-100 transition-colors duration-300">

      <div>
        <img src={require(`./../image/${image}`).default} alt="testimonial" className="mx-auto w-20 opacity-70 block xl:inline rounded-full"></img>
        <p className="text-gray-500">{comment}</p>
      </div>
      <div>
        <p className="text-gray-900 font-bold uppercase mt-6">{name}</p>
        <p className="text-blue-600">{date}</p>
      </div>