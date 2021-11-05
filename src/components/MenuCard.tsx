import React, { useState, useEffect, useContext } from 'react';
import MenuData from '../MenuData.json';
import { v4 as uuidv4 } from 'uuid';
import MenuDay from './MenuDay';
import Menus from './Menus';
import TestMenu from './TestMenu';
import { MenuContext } from '../contexts/MenuContext';
import AddForm from './AddForm';


export default function MenuCard({menu}) {
  // const [menuItem, setMenuItem] = useState(null);
  // const [completeMenus, setCompleteMenu] = useState(MenuData);
  // const [id, setId] = uuidv4();
  // const [day, setDay] = useState("");
  // const [starter, setStarter] = useState("");
  // const [priceStarter, setPriceStarter] = useState('');
  // const [main, setMain] = useState("");
  // const [priceMain, setPriceMain] = useState("");
  // const [dessert, setDessert] = useState("");
  // const [priceDessert, setPriceDessert] = useState("");
  // const [newDay, setNewDay] = useState("");
  const {updateMenu} = useContext(MenuContext);

  // useEffect(() => {
  //   localStorage.setItem('menus', JSON.stringify(completeMenus))
  // }, [completeMenus])

  const handleSubmit = (e) => {
    e.preventDefault();
    // const menuDay = day;
    // const starterName = starter;
    // const newPriceStarter = parseFloat(priceStarter) ;
    // const mainName = main;
    // const newPriceMain = parseFloat(priceMain);
    // const dessertName = dessert;
    // const newPriceDessert = parseFloat(priceDessert);

    // const newMenuItem = {
    //   id: id ,
    //   day: menuDay,
    //   starter: {
    //   name: starterName,
    //   priceStarter: newPriceStarter 
    //   },
    //   main: {
    //     name: mainName, 
    //     priceMain: newPriceMain
    //   },
    //   dessert: {
    //     name: dessertName, 
    //     priceDessert: newPriceDessert
    //   }
    // }
    
    // fetch('http://localhost:8000/menu', {
    //   method: 'POST',
    //   headers: {"content-type": "application/json" },
    //   body: JSON.stringify(MenuData)
    // })
    // .then(res => {
    //   return res.json();
    // })
    // .then((data) => {
    //   // console.log(data);
    //   setDay(menuDay)
    //   setId(uuidv4);
    //   setMenuItem(data);
    //   setCompleteMenu(completeMenus)
    //   setPriceStarter(priceStarter);
    //   setPriceMain(priceMain);
    //   setPriceDessert(priceDessert);
    //   // console.log(menuItem);
    // })
    // setCompleteMenu([...completeMenus, newMenuItem]);
    // console.log(completeMenus)
    // console.log(newMenuItem)
    // console.log(newMenuItem.day)
  }
  
  return (
    <>
    <div>
      <div className="text-2xl">{menu.id}</div>
      <div className="text-2xl">{menu.day}</div>
      <div className="text-2xl">{menu.nameStarter}</div>
      <div className="text-2xl">{menu.priceStarter}</div>
      <div className="text-2xl">{menu.nameMain}</div>
      <div className="text-2xl">{menu.priceMain}</div>
      <div className="text-2xl">{menu.nameDessert}</div>
      <div className="text-2xl">{menu.priceDessert}</div>
    </div>
    <AddForm theMenu={menu}/>
    {/* <TestMenu menu={{menu}} /> */}

    </>
  )
}

