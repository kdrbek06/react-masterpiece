import { useContext } from 'react';
import { MenuContext } from '../contexts/MenuContext';
import AddForm from './AddForm';

export default function MenuCard({menu}) {
  
  const {updateMenu} = useContext(MenuContext);
  
  return (
    <>
      <div className=" text-lg font-semibold bg-gray-200">Day : 
        <div className="flex text-xl font-light">{menu.day}</div>
      </div>
      <div  className=" text-lg font-semibold">Entrée :
        <div className="flex text-xl font-light">{menu.nameStarter}</div>
        <div className="grid justify-items-start bg-yellow-200"><div>€{menu.priceStarter}</div></div>
      </div>
      <div className="text-lg font-semibold">Main Dish : 
        <div className="flex text-xl font-light">{menu.nameMain}</div>
        <div className=" bg-yellow-200">€{menu.priceMain}</div>
      </div>
      <div className=" text-lg font-semibold">Dessert :
        <div className="flex text-xl font-light">{menu.nameDessert}</div>
        <div className="flex bg-yellow-200">€{menu.priceDessert}</div>
      </div>
      <div className=" text-lg font-semibold">Total Price :
        <div className="flex bg-green-200">€ {menu.totalPrice}</div>
      </div>
    </>
  )
}

