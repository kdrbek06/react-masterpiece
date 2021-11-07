import {useContext} from 'react';
import MenuCard from './MenuCard';
import { MenuContext } from '../contexts/MenuContext';

export default function Menus() {
  
  const {menus} = useContext(MenuContext);

  return (
    <>
    <div className="flex flex-wrap text-center items-center justify-evenly p-8">
      <div className="s p-4 border-2 ">
        <div className="box-border md:box-content h-350 w-800 p-4 border-4 text-center bg-yellow-200 bg-opacity-70 py-6 px-16 text-opacity-50 text-6xl text-black">Menu Card</div>
          <div className="w-full sm:w-full text-center flex flex-col-6 justify-between sm:mx6 bg-white bg-opacity-40">
          {Object.values(menus).map((menu, id) => (
            <div key={id}>
              <MenuCard menu={menu} />
            </div>
          ))}
        </div>
      </div>
    </div>
    
    </>
  )
}

