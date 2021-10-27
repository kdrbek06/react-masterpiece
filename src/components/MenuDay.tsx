import React from 'react';
import MenuCard from './MenuCard';
import MenuData from '../MenuData.json';

export default function MenuDay(MenuData) {
    console.log('info from child component:');
    console.log(MenuData);
    // console.log(completeMenu);

    return (
        <div className="border-solid border-2 bg-green-300 text-center">DAY
            <div className="underline bg-white">
                <p className="name">starter</p>
                <p className="price">price</p>
            </div>
            <div className="underline  bg-white">
                <p className="name">main</p>
                <p className="price">price</p>
            </div>
            <div className="underline bg-white">
                <p className="name">main</p>
                <p className="price">price</p>
            </div>
        </div>
    )
}
