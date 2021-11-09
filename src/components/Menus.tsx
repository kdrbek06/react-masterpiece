import {useContext} from 'react';
import MenuCard from './MenuCard';
import { MenuContext } from '../contexts/MenuContext';
import AddForm from './AddForm';

export default function Menus() {
  
  const {menus} = useContext(MenuContext);

  return (
    <>
    <div className="table-auto">Menu Card</div>
    <div className="md:grid grid-cols-3 grid-template-columns: repeat(0, minmax(3, 3fr)) sm:grid grid-cols-1 grid-template-columns: repeat(0, minmax(3, 3fr))">
      {Object.values(menus).map((menu, id) => (
        <div className="border-solid border-4 py-2 px-8" key={id}>
          <MenuCard menu={menu} />
          <div className="text-lg font-semibold"><AddForm theMenu={menu}/></div>
        </div>
      ))}
    </div>
    </>
  )
}

