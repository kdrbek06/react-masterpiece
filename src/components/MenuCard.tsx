import React, { useState } from 'react';


export default function MenuCard() {
  const [day, setDay] = useState("Monday");
  const [starter, setStarter] = useState("");
  const [main, setMain] = useState("");
  const [dessert, setDessert] = useState("");

  function handleMenuClick() {
    console.log("clickedy")
  }

  return (
    <>
    <div className="md:container md:mx-auto mx-auto h-800 w-900 p-4 px-4">
      <div className="s p-4 border-4 ">
        <div className="box-border md:box-content h-350 w-800 p-4 border-4 text-center decoration-clone bg-gradient-to-b from-green-100 to-blue-150 text-transparent text-purple-500 text-opacity-50 text-6xl">
          Menu Card
        </div>
          <div className="grid grid-cols-3 grid-template-columns: repeat(6, minmax(0, 1fr))">
            <div className="border-solid border-2 bg-green-300 text-center">Monday
                <div className="underline bg-white">
                  <p className="name">Starter</p>
                  <p className="price">price</p>
                </div>
                <div className="underline  bg-white">
                  <p className="name">Main</p>
                  <p className="price">price</p>
                </div>
                <div className="underline bg-white">
                  <p className="name">Dessert</p>
                  <p className="price">price</p>
                </div>
            </div>
            <div className="border-solid border-2 bg-green-300 text-center">Tuesday
                <div className="underline bg-white ">
                  <p className="name">Starter</p>
                  <p className="price">price</p>
                </div>
                <div className="underline  bg-white">
                  <p className="name">Main</p>
                  <p className="price">price</p>
                </div>
                <div className="underline bg-white">
                  <p className="name">Dessert</p>
                  <p className="price">price</p>
                </div>
            </div>
            <div className="border-solid border-2 bg-green-300 text-center">Wednesday
              <div className="underline bg-white ">
                  <p className="name">Starter</p>
                  <p className="price">price</p>
              </div>
              <div className="underline bg-white">
                  <p className="name">Main</p>
                  <p className="price">price</p>
              </div>
              <div className="underline bg-white ">
                  <p className="name">Dessert</p>
                  <p className="price">price</p>
              </div>
            </div>
            <div className="border-solid border-2 bg-green-300 text-center">Thursday
              <div className="underline bg-white">
                <p className="name">Starter</p>
                <p className="price">price</p>
              </div>
              <div className="underline bg-white">
                <p className="name">Main</p>
                <p className="price">price</p>
              </div>
              <div className="underline bg-white">
                <p className="name">Dessert</p>
                <p className="price">price</p>
              </div>
            </div>
            <div className="border-solid border-2 bg-green-300 text-center">Friday
              <div className="underline bg-white">
                <p className="name">Starter</p>
                <p className="price">price</p>
              </div>
              <div className="underline bg-white">
                <p className="name">Main</p>
                <p className="price">price</p>
              </div>
              <div className="underline bg-white">
                <p className="name">Dessert</p>
                <p className="price">price</p>
              </div>
            </div>
            <div className="border-solid border-2 bg-green-300 text-center">Saturday
              <div className="underline bg-white">
                <p className="name">Starter</p>
                <p className="price">price</p>
              </div>
              <div className="underline  bg-white">
                <p className="name">Main</p>
                <p className="price">price</p>
              </div>
              <div className="underline bg-white">
                <p className="name">Dessert</p>
                <p className="price">price</p>
              </div>
          </div>
        </div>
      </div>
    </div>
    <p>Add your menu here : </p>
    <form className="w-full max-w-sm">
      <label className="block text-left max-width 100%">
        <span className="text-gray-700">Pick a day</span>
        <select className="form-select block w-full mt-1"
        value={day} onChange={(e) => setDay(e.target.value)}>
            <option>Monday</option>
            <option>Tuesday</option>
            <option>Wednesday</option>
            <option>Thursday</option>
            <option>Friday</option>
            <option>Saturday</option>
        </select>
      </label>
      <div className="flex items-center border-b border-teal-500 py-2">
        <label htmlFor="starter">starter</label>
        <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" 
        type="text" value={starter}
        onChange={(e) => setStarter(e.target.value)}></input>
      </div>
      <div className="flex items-center border-b border-teal-500 py-2">
        <label htmlFor="starter">main</label>
        <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" 
        type="text" value={main}
        onChange={(e) => setMain(e.target.value)}></input>
      </div>
      <div className="flex items-center border-b border-teal-500 py-2">
        <label htmlFor="starter">dessert</label>
        <input className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" 
        type="text" value={dessert}
        onChange={(e) => setDessert(e.target.value)}></input>
      </div>
      <button className="flex-shrink-0 border-solid border-4 text-teal-500 hover:text-teal-800 text-sm py-1 px-2 rounded" type="button" onClick={handleMenuClick}>
        + Add
      </button>
      <p> {day} </p>
      <p> {starter}</p>
      <p> {main}</p>
      <p> {dessert}</p>
    </form>
    </>
  )
}

