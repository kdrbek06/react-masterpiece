import { useContext } from 'react';
import { MenuContext } from '../contexts/MenuContext';
import AddForm from './AddForm';

export default function MenuCard({menu}) {
  
  const {updateMenu} = useContext(MenuContext);
  
  return (
    <> 
      <div className="box-border md:box-content bg-black text-yellow-300 text-opacity-90 h-350 w-800 text-center decoration-clone my-6 p-6 sm:mx6 border-solid border-4 border-light-blue-500 font-bold font-rancho "> 
        <div className="justify-items-center text-4xl font-light">{menu.day}</div>
      </div>
      <div  className="text-lg font-semibold ">Entrée :
        <div className="flex text-xl font-light ">{menu.nameStarter}</div>
        <div className="grid justify-items-end text-yellow-400 text-opacity-60 font-rancho text-2xl"><div>€{menu.priceStarter}</div></div>
      </div>
      <div className="text-lg font-semibold">Main Dish : 
        <div className="flex text-xl font-light">{menu.nameMain}</div>
        <div className="grid justify-items-end text-yellow-400 text-opacity-60 font-rancho text-2xl">€{menu.priceMain}</div>
      </div>
      <div className=" text-lg font-semibold">Dessert :
        <div className="flex text-xl font-light">{menu.nameDessert}</div>
        <div className="grid justify-items-end text-yellow-400  text-opacity-60 font-rancho text-2xl">€{menu.priceDessert}</div>
      </div>
      <div className=" text-lg font-semibold">Total Price :
        <div className="flex justify-items-end text-green-400 font-rancho text-2xl">€ {menu.totalPrice}</div>
      </div>
    </>
  )
}

