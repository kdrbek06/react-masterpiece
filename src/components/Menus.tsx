import {useContext} from 'react';
import MenuCard from './MenuCard';
import { MenuContext } from '../contexts/MenuContext';
import AddForm from './AddForm';

export default function Menus() {
  
  const {menus} = useContext(MenuContext);

  return (
    <>
    <div className="p-4 border-4 bg-yellow-200 bg-opacity-70 py-6 px-16 text-opacity-50 text-6xl text-black">Menu Card</div>
      <div className="border-solid border-4 border-light-blue-500">
      {Object.values(menus).map((menu, id) => (
        <div key={id}>
          <MenuCard menu={menu} />
          <div className="text-lg font-semibold"><AddForm theMenu={menu}/></div>
        </div>
      ))}
    </div>
    </>
  )
}

