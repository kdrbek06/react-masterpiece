import * as React from 'react';
import aboutImg from '../image/food3.png';
import aboutImg2 from '../image/food5.png';
import aboutImg3 from '../image/food2.jpg';
import { Link } from 'react-router-dom';

export interface IAppProps {
}

export default function App(props: IAppProps) {
  return (
    <div id="about" className="m-2 p-2 lg:m-16 text-center">
      <h2 className="modifiedH2" >About Us</h2>
      <p className="m-auto md:w-2/3 mb-8"> Welcome to the Real Meal Website ! Let's introduce ourselves : <br/><br/>
        
        <b>Real Meal provides restaurant-quality home-cooked takeaway</b> service since 2021. Our Cooks are your local people who love to cook, and offer their weekly menu on our site. 

        The biggest distinction between us and other food sharing platforms, is that we keep it P2P, instead of working with the traditional oversaturated multinational restaurants.

        We highly incentivize our Cooks to reduce plastic and avoid the waste of food. One of our initiatives here is that you can't order single dishes, as you can only order per Daily Menu.
         
        Here at Real Meal we say <b>fresh, local, personal</b> and <b>environmentally conscious</b>.  </p>

      <div className="md:flex justify-evenly items-center p-8">
        <p className="max-w-xl">This is how it works : If you want to order from the menu, go have a look at our <br/> <Link to="/menu" className="text-pink-700">Menu's Page </Link>.

          If you are a passionate preparer of delicious meals, why not <Link to="/Login" className="text-pink-700">log in </Link> and start sharing your custom made Menu . It's a nice way to earn some extra money as well, as we minimize the profit we make on the transactions . We vouch for fair prices, and an honest income for our Cooks. <br/>

          Transparency is key at Real Meal. We take our client's feedback very serious. We base our future cooperations with Cooks on the received reviews. 
        </p>
        <img src={aboutImg} className="w-full md:w-1/3 transform transition duration-500 hover:scale-110" alt="" />
      </div>

      <div className="md:flex justify-evenly items-center p-8">
        <img src={aboutImg2} className="w-full md:w-1/3 transform transition duration-500 hover:scale-110" alt="" />
        <p className="max-w-xl">
          Real Meal is an initiative of two aspiring developers, Kadir and Dennis, who want to bring local communities together through the forgotten art of cooking. We live in a fastpaced world, and have forgotten the golden days where friends and family came together and enjoy a freshly cooked meal after a hard day of work. 

          We don't offer junkfood, and don't work with mass production cuisine. A true Real Meal Cook is expected to use fresh and local products, be it from their own garden or local (super)market .          
          
          </p>
      </div>

      <div className="md:flex justify-evenly items-center p-8">
        <p className="max-w-xl">Real Meal is a Belgian based website with HQ's in Ghent and and Antwerp. We are always looking for (local) partnerships, and collaboration in order to grow and improve our service to the community. We prefer valuable colobarotion over lobby sponsorships.           Make sure to contact us if you want to collaborate or have a great idea / initiative. We are here to bring people together through food and passion for cooking, so the possibilities are infinite !</p>
        <img src={aboutImg3} className="w-full md:w-1/3 transform transition duration-500 hover:scale-110" alt="" />
      </div>


    </div>
  );
}
