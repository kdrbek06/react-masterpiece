import React, { useState, useEffect, useContext } from 'react';
import MenuData from '../MenuData.json';
import { v4 as uuidv4 } from 'uuid';
import MenuDay from './MenuDay';
import Menus from './Menus';
import TestMenu from './TestMenu';
import { UserContext } from './UserContext';


export default function MenuCard() {
  const [menuItem, setMenuItem] = useState(null);
  const [completeMenus, setCompleteMenu] = useState(MenuData);
  const [id, setId] = uuidv4();
  const [day, setDay] = useState("");
  const [starter, setStarter] = useState("");
  const [priceStarter, setPriceStarter] = useState('');
  const [main, setMain] = useState("");
  const [priceMain, setPriceMain] = useState("");
  const [dessert, setDessert] = useState("");
  const [priceDessert, setPriceDessert] = useState("");
  const [newDay, setNewDay] = useState("");
  const msg = useContext(UserContext);

  useEffect(() => {
    localStorage.setItem('menus', JSON.stringify(completeMenus))
  }, [completeMenus])

  const handleSubmit = (e) => {
    e.preventDefault();
    const menuDay = day;
    const starterName = starter;
    const newPriceStarter = parseFloat(priceStarter) ;
    const mainName = main;
    const newPriceMain = parseFloat(priceMain);
    const dessertName = dessert;
    const newPriceDessert = parseFloat(priceDessert);

    const newMenuItem = {
      id: id ,
      day: menuDay,
      starter: {
      name: starterName,
      priceStarter: newPriceStarter 
      },
      main: {
        name: mainName, 
        priceMain: newPriceMain
      },
      dessert: {
        name: dessertName, 
        priceDessert: newPriceDessert
      }
    }
    
    fetch('http://localhost:8000/menu', {
      method: 'POST',
      headers: {"content-type": "application/json" },
      body: JSON.stringify(MenuData)
    })
    .then(res => {
      return res.json();
    })
    .then((data) => {
      // console.log(data);
      setDay(menuDay)
      setId(uuidv4);
      setMenuItem(data);
      setCompleteMenu(completeMenus)
      setPriceStarter(priceStarter);
      setPriceMain(priceMain);
      setPriceDessert(priceDessert);
      // console.log(menuItem);
    })
    setCompleteMenu([...completeMenus, newMenuItem]);
    console.log(completeMenus)
    console.log(newMenuItem)
    console.log(newMenuItem.day)
  }
  
  return (
    <>
    <div>{msg}</div>
    {/* {completeMenus.map(menu =>(
      <tr><TestMenu /></tr>
    ))} */}
    {/* <div>{completeMenus.map((completeMenu) => { <div key={completeMenu.id}>
      <TestMenu />
    </div>})}</div> */}
    <div className="md:container md:mx-auto mx-auto h-800 w-900 p-4 px-4">
      <div className="s p-4 border-4 ">
        <div className="box-border md:box-content h-350 w-800 p-4 border-4 text-center decoration-clone bg-gradient-to-b from-green-100 to-blue-150 text-transparent text-purple-500 text-opacity-50 text-6xl">
          Menu Card
        </div>
        <TestMenu />
          <div className="grid grid-cols-3 grid-template-columns: repeat(6, minmax(0, 1fr))">
            <div className="border-solid border-2 bg-purple-300 text-center">{day}
              <div className="underline bg-white">
                <p className="name">{starter}</p>
                <p className="price">{priceStarter}</p>
              </div>
              <div className="underline  bg-white">
                <p className="name">{main}</p>
                <p className="price">{priceMain}</p>
              </div>
              <div className="underline bg-white">
                <p className="name">{dessert}</p>
                <p className="price">{priceDessert}</p>
              </div>
            </div>
        </div>
      </div>
    </div>
    {/* <MenuDay></MenuDay> */}
    <p>Add your menu here : </p>
    <form  onSubmit={handleSubmit} className="w-full max-w-sm">
      <label className="block text-left max-width 100%">
        <span className="text-gray-700">Pick a day</span>
        <select className="form-select block w-full mt-1"
        value={day} onChange={(e) => setDay(e.target.value)}>
            <option >DAY OF THE WEEK</option>
            <option value="Monday">Monday</option>
            <option value="Tuesday">Tuesday</option>
            <option value="Wednesday">Wednesday</option>
            <option value="Thursday">Thursday</option>
            <option value="Friday">Friday</option>
            <option value="Saturday">Saturday</option>
        </select>
      </label>
      <div className="flex items-center border-b border-teal-500 py-2">
        <label htmlFor="starter">starter</label>
        <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" 
        type="text" value={starter}
        onChange={(e) => setStarter(e.target.value)}></input>
        <label htmlFor="priceStarter">price</label>
        <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" 
        type="text" value={priceStarter}
        onChange={(e) => setPriceStarter(e.target.value)}></input>
      </div>
      <div className="flex items-center border-b border-teal-500 py-2">
        <label htmlFor="starter">main</label>
        <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" 
        type="text" value={main}
        onChange={(e) => setMain(e.target.value)}></input>
        <label htmlFor="priceMain">price</label>
        <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" 
        type="text" value={priceMain}
        onChange={(e) => setPriceMain(e.target.value)}></input>
      </div>
      <div className="flex items-center border-b border-teal-500 py-2">
        <label htmlFor="starter">dessert</label>
        <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" 
        type="text" value={dessert}
        onChange={(e) => setDessert(e.target.value)}></input>
        <label htmlFor="priceDessert">price</label>
        <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" 
        type="text" value={priceDessert}
        onChange={(e) => setPriceDessert(e.target.value)}></input>
      </div>
      <button className="flex-shrink-0 border-solid border-4 text-teal-500 hover:text-teal-800 text-sm py-1 px-2 rounded" type="submit" >
        + Add
      </button>
      <p> {day}</p>
      <p> {starter} {priceStarter}</p>
      <p> {main} {priceMain}</p>
      <p> {dessert} {priceDessert}</p>
    </form>
    </>
  )
}

