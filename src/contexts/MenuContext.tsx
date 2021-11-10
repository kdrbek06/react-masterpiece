import { createContext, useEffect, useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export const MenuContext = createContext< any | undefined>(undefined);

const MenuContextProvider = (props) => {

    const [menus, setMenus] = useState([
        { id: uuidv4(), day:"Monday", nameStarter: "Pôtage du jour", priceStarter: 4.20, nameMain: "Pomme d'amour", priceMain: 6.90 , nameDessert: "Salade du fruits", priceDessert: 4.20, totalPrice: 13.50, },
        { id: uuidv4(), day: "Tuesday", nameStarter: "Croquette crevette", priceStarter: 4.20 ,nameMain: "Moules Frites", priceMain: 6.90 , nameDessert: "Mousse au chocolat", priceDessert: 4.20, totalPrice: 13.50, },
        { id: uuidv4(), day: "Wednesday", nameStarter: "Croquette fromage", priceStarter: 4.20 , nameMain: "Pain Saucisse", priceMain: 6.90 , nameDessert: "Mousse au fraise", priceDessert: 4.20, totalPrice: 13.50, }, 
        { id: uuidv4(), day: "Thursday", nameStarter: "Croquette duo", priceStarter: 4.20 , nameMain: "Pain Fromage", priceMain: 6.90 , nameDessert: "Mousse au Camembert", priceDessert: 4.20, totalPrice: 13.50, },
        { id: uuidv4(), day: "Friday", nameStarter: "Cocktail of crevettes", priceStarter: 4.20 , nameMain: "Panette poison", priceMain: 6.90 , nameDessert: "Mousse au Brie", priceDessert: 4.20, totalPrice: 13.50, },
        { id: uuidv4(), day: "Saturday", nameStarter: "Carpaccio", priceStarter: 4.20 , nameMain: "Pain Jambon", priceMain: 6.90 , nameDessert: "Tiramisu", priceDessert: 4.20, totalPrice: 13.50, }
    ])

    
    useEffect(() => {
        localStorage.setItem('menus', JSON.stringify(menus));
    })

    useEffect(() => {
        setMenus(JSON.parse(localStorage.getItem('menus') || '{}'))
    },[])

    const updateMenu = (id, updatedMenu) => {
        setMenus(menus.map((menu) => menu.id === id ? updatedMenu : menu))
    }
    
    return(
        <MenuContext.Provider value={{menus, updateMenu}}>
            {props.children}
        </MenuContext.Provider>
    )
}
export {MenuContextProvider};