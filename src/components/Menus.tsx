import {useContext} from 'react';
import MenuCard from './MenuCard';
import { MenuContext } from '../contexts/MenuContext';
import AddForm from './AddForm';

export default function Menus() {
  
  const {menus} = useContext(MenuContext);

  return (
    <>
    <div className="m-2 p-2 lg:m-16 text-center">
      <h2 className="modifiedH2"> Welcome Chef ! </h2>
        <p className="m-auto md:w-2/3 mb-8">This is your personal page where you can set up your personalized new menu ! <br/>
        Pick a day, and press the "Edit Menu" button to get started !<br/> 
        (Don't forget to set your price). After clicking save your card get's updated automatically ! 
        </p>
    </div>
    <div className="md:grid grid-cols-3 grid-template-columns: repeat(0, minmax(3, 3fr)) sm:grid grid-cols-1 grid-template-columns: repeat(0, minmax(3, 3fr))">
      {Object.values(menus).map((menu, id) => (
        <div className="border-solid border-4 mx-10 py-2 px-8" key={id}>
          <MenuCard menu={menu} />
          <div className="text-lg font-semibold"><AddForm theMenu={menu}/></div>
        </div>
      ))}
    </div>
    </>
  )
}

