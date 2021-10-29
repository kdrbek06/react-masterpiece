import React, {useEffect} from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import './App.css';
import Navbar from '../src/components/Navbar';
import MainPage from './components/MainPage';
import Login from './components/Login';
import Reviews from './components/Reviews';
import Payments from './components/Payments';
import Footer from './components/Footer';
import Menus from './components/Menus';
import CookDetails from './components/CookDetails';
import { UserContext } from './components/UserContext';



function App() {
  


  return (
    <div className="App">
      
      <Router>

        <Navbar/>
    
        

        <Switch>
          <Route path="/" exact component={MainPage}></Route>
        <UserContext.Provider value="DOOT DOOT FROM CONTEXT">
          <Route path="/Menus" component={Menus}></Route>
        </UserContext.Provider>
          <Route path="/Reviews" component={Reviews}></Route>
          <Route path="/Cookdetails/:id" component={CookDetails}></Route>
        </Switch>
      </Router>


      <Footer/>
    </div>
  );
}

export default App;
