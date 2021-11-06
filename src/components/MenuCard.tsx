import { useContext } from 'react';
import { MenuContext } from '../contexts/MenuContext';
import AddForm from './AddForm';

export default function MenuCard({menu}) {
  
  const {updateMenu} = useContext(MenuContext);
  console.log(menu.day)
  
  return (
    <>
    <div>
      <div>{menu.day}</div>
      <div>{menu.nameStarter}</div>
      <div>{menu.priceStarter}</div>
      <div>{menu.nameMain}</div>
      <div>{menu.priceMain}</div>
      <div>{menu.nameDessert}</div>
      <div>{menu.priceDessert}</div>
      <AddForm theMenu={menu}/>
    </div>
   

    </>
  )
}

