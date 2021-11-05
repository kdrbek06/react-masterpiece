import { useContext } from 'react';
import { MenuContext } from '../contexts/MenuContext';
import AddForm from './AddForm';


export default function MenuCard({menu}) {
  
  const {updateMenu} = useContext(MenuContext);
  
  return (
    <>
    <div>
      <div className="text-2xl">{menu.id}</div>
      <div className="text-2xl">{menu.day}</div>
      <div className="text-2xl">{menu.nameStarter}</div>
      <div className="text-2xl">{menu.priceStarter}</div>
      <div className="text-2xl">{menu.nameMain}</div>
      <div className="text-2xl">{menu.priceMain}</div>
      <div className="text-2xl">{menu.nameDessert}</div>
      <div className="text-2xl">{menu.priceDessert}</div>
    </div>
    <AddForm theMenu={menu}/>

    </>
  )
}

