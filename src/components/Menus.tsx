import React, {useContext} from 'react';
import MenuCard from './MenuCard';
import { MenuContext } from '../contexts/MenuContext';
import AddForm from './AddForm';

export default function Menus() {
  
  const {menus} = useContext(MenuContext);

  return (
    <>
    <div className="md:container md:mx-auto mx-auto h-800 w-900 p-4 px-4">
      <div className="s p-4 border-4 ">
        <div className="box-border md:box-content h-350 w-800 p-4 border-4 text-center bg-yellow-200 bg-opacity-70 py-6 px-16 text-opacity-50 text-6xl text-black">Menu Card
          {/* <div><MenuCard menu={menus} /></div> */}
          Menu component comes here
        </div>
      </div>
      <div className="box-border md:box-content h-350 w-800 p-4 border-4 text-center bg-yellow-200 bg-opacity-70 py-6 px-16 text-opacity-50 text-6xl text-black">
      {Object.values(menus).map((menu, id) => (
        <div key={id}>
          <MenuCard menu={menu} />
        </div>
      ))}
    </div>
    </div>
    
    </>
  )
}

