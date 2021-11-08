import React, { useContext } from 'react'
import { MenuContext } from '../contexts/MenuContext';
import MenuCard from './MenuCard';

export default function MenuOverview() {

    const {menus} = useContext(MenuContext);

    return (
        <div className="md:container md:mx-auto mx-auto h-800 w-900 p-4 px-4">
      <div className="s p-4 border-4">
        <div className="box-border md:box-content h-350 w-800 text-center decoration-clone my-6 p-6 sm:mx6 border-solid border-4 border-light-blue-500">Menu Card
        </div>
        <div className="grid grid-cols-3 grid-template-columns: repeat(3, minmax(0, 1fr))">
          {Object.values(menus).map((menu, id) => (
            <div key={id}>
              <MenuCard menu={menu} />
            </div>
          ))}
        </div>
      </div>
    </div>
    )
}
