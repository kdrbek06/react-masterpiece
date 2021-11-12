import React, { useContext } from 'react'
import { MenuContext } from '../contexts/MenuContext';
import MenuCard from './MenuCard';
import chicon from '../image/chicon.jpg';

export default function MenuOverview() {

    const {menus} = useContext(MenuContext);
  
    return (
    <>
      
      <div className="md:flex justify-evenly items-center">
        <p className="max-w-xl text-base tracking-wider">
        <h2 className="modifiedH2 max-w-xl mx-auto text-4xl text-center px-auto py-auto opacity-80%" >This Week's Menu</h2>
        Welcome to the Menu Page. Here you find the overview of this weeks selection ! All dishes are carefully selected and prepared by our cooks. Click the Yes Please button to add the selected day to the card. And you know what they say, Tippin is not a county in China ;).
        Here at Real Meal we highly value our planet, and stand strongly against the wase of plastic and food. Therefore we disabled the option of individual orders, and you can only choose to select the complete Menu per day. 
        This is also a fair system for our cooks, as we also value their time and effort. <br/><br/>
        Keep a close eye on this page, as our Cooks have the ability to constantly update their Menu. They have absolute freedom over when and what they offer on the Menu. Scroll down if you want to see this week's Menu Card, and start ordering delicious local meals, prepared with love by our Cooks ! 
        </p>
        <img src={chicon} className="w-full md:w-1/3 transform transition duration-500 hover:scale-105 object-scale-down" alt="" />
      </div>
      <div className="box-border md:box-content bg-black text-yellow-300 h-350 w-800 text-center decoration-clone my-6 p-6 sm:mx6 border-solid border-4 border-light-blue-500 font-bold font-rancho text-7xl text-opacity-80">Menu Card
      </div>
      <div className="md:grid grid-cols-3 grid-template-columns: repeat(0, minmax(3, 3fr)) sm:grid grid-template-columns: repeat(0, minmax(3, 3fr)) gap-2">
        {Object.values(menus).map((menu, id) => (
          <div className="border-solid border-4 mx-10 py-2 px-8 rounded" key={id}>
            <MenuCard menu={menu} />
          </div>
        ))}
      </div>
      <h2 className="font-rancho text-8xl text-center mt-20 mb-20 text-yellow-300 opacity-60" >Bon Appétit !</h2>
      <br/><br/>
    </>
    )
}
