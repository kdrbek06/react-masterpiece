import React from 'react';


export default function MenuCard() {
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
    <label className="block text-left max-width 100%">
      <span className="text-gray-700">Pick a day</span>
      <select className="form-select block w-full mt-1">
          <option>Monday</option>
          <option>Tuesday</option>
          <option>Wednesday</option>
          <option>Thursday</option>
          <option>Friday</option>
          <option>Saturday</option>
      </select>
    </label>
    </>
  )
}

