import React, { Component, useState, useContext} from 'react';
import MenuData from '../MenuData.json';
import AddForm from './AddForm';
import MenuDay from './MenuDay';
import { MenuContext } from "../contexts/MenuContext";

console.log("new log: " , MenuData) 

const TestMenu = ({menu}) => {
    // const [useMenu, setUseMenu] = useState(MenuData);

    return (
        <>
        <div className="md:container md:mx-auto mx-auto h-800 w-900 p-4 px-4" key={menu.id}>
            <div>
                <div>{menu.id}</div>
                <div>{menu.day}</div>
                <div>{menu.nameStarter}</div>
                <div>{menu.priceStarter}</div>
                <div>{menu.nameMain}</div>
                <div>{menu.priceMain}</div>
                <div>{menu.nameDessert}</div>
                <div>{menu.priceDessert}</div>
            </div>
        </div>
        
        {/* <MenuDay /> */}
        {/* <div>{menu.map((menuDetail, id) => {
        return  <div className="md:container md:mx-auto mx-auto h-800 w-900 p-4 px-4" key={id}>
                    <div className="text-center bg-gray-400" key={id}>{menuDetail.day}
                        <div className="underline bg-white">
                            <p>{menuDetail.id}</p>
                            <p className="name">{menuDetail.id} {menuDetail.starter.name}</p>
                            <p className="price">{menuDetail.starter.priceStarter}</p>
                            </div>
                            <div className="underline  bg-white">
                            <p className="name">{menuDetail.main.name}</p>
                            <p className="price">{menuDetail.main.priceMain}</p>
                            </div>
                            <div className="underline bg-white">
                            <p className="name">{menuDetail.dessert.name}</p>
                            <p className="price">{menuDetail.dessert.priceDessert}</p>
                        </div>
                        <div><AddForm theMenu={menu}/></div>
                    </div>    
                </div>
            
            })}
        </div> */}
        </>
    )

}
export default TestMenu;
