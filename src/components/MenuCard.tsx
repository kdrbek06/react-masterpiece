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
      <div  className="text-lg font-semibold mx-2">Entrée :
        <div className="flex text-xl font-light text-opacity-60">{menu.nameStarter}</div>
        <div className="grid justify-items-end text-yellow-400 text-opacity-60 font-rancho text-2xl mx-2"><div>€{menu.priceStarter}</div></div>
      </div>
      <div className="text-lg font-semibold mx-2">Main Dish : 
        <div className="flex text-xl font-light">{menu.nameMain}</div>
        <div className="grid justify-items-end text-yellow-400 text-opacity-60 font-rancho text-2xl mx-2">€{menu.priceMain}</div>
      </div>
      <div className=" text-lg font-semibold mx-2">Dessert :
        <div className="flex text-xl font-light">{menu.nameDessert}</div>
        <div className="grid justify-items-end text-yellow-400  text-opacity-60 font-rancho text-2xl mx-2">€{menu.priceDessert}</div>
      </div>
      <div className=" text-lg font-semibold mx-2">Total Price :
        <div className="flex justify-items-end text-green-400 font-rancho text-2xl mr-2">€ {menu.totalPrice}</div>
      </div>
    </>
  )
}

