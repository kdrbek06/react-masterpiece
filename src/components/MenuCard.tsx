import { useContext } from 'react';
import { MenuContext } from '../contexts/MenuContext';
import AddForm from './AddForm';

export default function MenuCard({menu}) {
  
  const {updateMenu} = useContext(MenuContext);
  
  return (
    <>
    <div className="w-full sm:w-1/2 text-center flex flex-col justify-between	my-6 p-6 sm:mx6 border-solid border-4 border-light-blue-500">
      <div className="text-lg font-semibold">Day : 
        <div className="text-xl font-light">{menu.day}</div>
      </div>
      <div  className="text-lg font-semibold">Entrée :
        <div className="text-xl font-light">{menu.nameStarter}</div>
      </div>
      <div className="text-lg font-semibold">€ 
        <div className="text-xl font-light">{menu.priceStarter}</div>
      </div>
      <div className="text-lg font-semibold">Main Dish : 
        <div className="text-xl font-light">{menu.nameMain}</div>
      </div>
      <div className="text-lg font-semibold">€ 
        <div className="text-xl font-light">{menu.priceMain}</div>
      </div>
      <div className="text-lg font-semibold">Dessert :
        <div className="text-xl font-light">{menu.nameDessert}</div>
      </div>
      <div className="text-lg font-semibold">€ 
        <div className="text-xl font-light">{menu.priceDessert}</div>
      </div>
      <div className="text-lg font-semibold">Total Price :
        <div className="text-xl font-light">€ {menu.totalPrice}</div>
      </div>
    </div>
    </>
  )
}

