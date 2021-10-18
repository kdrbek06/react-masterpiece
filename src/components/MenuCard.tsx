import React from 'react';


export default function MenuCard() {
  return (
    <div className="md:container md:mx-auto mx-auto px-4">
      <div className="box-border md:box-content h-750 w-900 p-4 border-4 ">
      <div className="box-border md:box-content h-350 w-800 p-4 border-4 text-center decoration-clone bg-gradient-to-b from-green-100 to-blue-150 text-transparent text-purple-500 text-opacity-50 text-6xl">
        Menu Card
      </div>
        <div className="grid grid-cols-3 grid-template-columns: repeat(6, minmax(0, 1fr))">
        <div className="border-solid border-2 bg-green-300 text-center">Monday
        <div className="underline bg-white text-left">Starter</div>
        <div className="underline  bg-white text-left">Main</div>
        <div className="underline bg-white text-left">Dessert</div>
        </div>
        <div className="border-solid border-2 bg-green-300 text-center">Tuesday
        <div className="underline bg-white text-left">Starter</div>
        <div className="underline  bg-white text-left">Main</div>
        <div className="underline bg-white text-left">Dessert</div>
        </div>
        <div className="border-solid border-2 bg-green-300 text-center">Wednesday
        <div className="underline bg-white text-left">Starter</div>
        <div className="underline  bg-white text-left">Main</div>
        <div className="underline bg-white text-left">Dessert</div>
        </div>
        <div className="border-solid border-2 bg-green-300 text-center">Thursday
        <div className="underline bg-white text-left">Starter</div>
        <div className="underline  bg-white text-left">Main</div>
        <div className="underline bg-white text-left">Dessert</div>
        </div>
        <div className="border-solid border-2 bg-green-300 text-center">Friday
        <div className="underline bg-white text-left">Starter</div>
        <div className="underline  bg-white text-left">Main</div>
        <div className="underline bg-white text-left">Dessert</div>
        </div>
        <div className="border-solid border-2 bg-green-300 text-center">Saturday
        <div className="underline bg-white text-left">Starter</div>
        <div className="underline  bg-white text-left">Main</div>
        <div className="underline bg-white text-left">Dessert</div>
        </div>
      </div>
      </div>
    </div>
  )
}

