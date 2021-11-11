import React, { useContext } from 'react'
import { MenuContext } from '../contexts/MenuContext';
import MenuCard from './MenuCard';

export default function MenuOverview() {

    const {menus} = useContext(MenuContext);
  
    return (
    <>
      <div className="box-border md:box-content bg-black text-yellow-300 h-350 w-800 text-center decoration-clone my-6 p-6 sm:mx6 border-solid border-4 border-light-blue-500 font-bold font-rancho text-7xl">Menu Card
      </div>
      <div className="md:grid grid-cols-3 grid-template-columns: repeat(0, minmax(3, 3fr)) sm:grid grid-template-columns: repeat(0, minmax(3, 3fr))">
        {Object.values(menus).map((menu, id) => (
          <div className="border-solid border-4 mx-10 py-2 px-8 rounded" key={id}>
            <MenuCard menu={menu} />
          </div>
        ))}
      </div>
      <br/><br/>
    </>
    )
}
