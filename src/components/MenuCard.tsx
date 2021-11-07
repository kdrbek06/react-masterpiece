import { useContext } from 'react';
import { MenuContext } from '../contexts/MenuContext';
import AddForm from './AddForm';

export default function MenuCard({menu}) {
  
  const {updateMenu} = useContext(MenuContext);
  
  return (
    <>
    <div>
      <div>Day : {menu.day}</div>
      <div>Entrée : {menu.nameStarter}</div>
      <div>€ {menu.priceStarter}</div>
      <div>Main Dish : {menu.nameMain}</div>
      <div>€ {menu.priceMain}</div>
      <div>Dessert :{menu.nameDessert}</div>
      <div>€ {menu.priceDessert}</div>
      <div>Total Price : € {menu.totalPrice}</div>
      <AddForm theMenu={menu}/>
    </div>
    </>
  )
}

