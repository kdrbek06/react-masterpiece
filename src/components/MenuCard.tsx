import { useContext } from 'react';
import { MenuContext } from '../contexts/MenuContext';
import AddForm from './AddForm';

export default function MenuCard({menu}) {
  
  const {updateMenu} = useContext(MenuContext);
  
  return (
    <>
    <div className="flex flex-col justify-between	my-6 p-6 sm:mx6 border-solid border-4 border-light-blue-500">
      <div className="flex text-lg font-semibold bg-gray-200">Day : 
        <div className="text-xl font-light">{menu.day}</div>
      </div>
      <div  className="flex text-lg font-semibold">Entrée :
        <div className="flex text-xl font-light">{menu.nameStarter}</div>
        <div className="grid justify-items-start bg-yellow-200"><div>€{menu.priceStarter}</div></div>
      </div>
      <div className="flex text-lg font-semibold">Main Dish : 
        <div className="text-xl font-light">{menu.nameMain}</div>
        <div className="justify-items-end bg-yellow-200">€{menu.priceMain}</div>
      </div>
      <div className="flex text-lg font-semibold">Dessert :
        <div className="text-xl font-light">{menu.nameDessert}</div>
        <div className="justify-items-end bg-yellow-200">€{menu.priceDessert}</div>
      </div>
      <div className="flex text-lg font-semibold">Total Price :
        <div className="justify-items-end ">€ {menu.totalPrice}</div>
      </div>
    </div>
    </>
  )
}

