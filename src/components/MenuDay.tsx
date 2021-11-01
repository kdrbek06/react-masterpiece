import React, { useState } from 'react';
import MenuCard from './MenuCard';
import MenuData from '../MenuData.json';
import { v4 as uuidv4 } from 'uuid';

export default function MenuDay() {
    console.log('info from child component:');
    console.log(MenuData);
    // console.log(completeMenu);
    
    return (
        <div className="border-solid border-2 bg-green-300 text-center">DAY
            <div className="underline bg-white">
                <p className="name">starter</p>
                <p className="price">price</p>
            </div>
            <div className="underline bg-white">
                <p className="name">main</p>
                <p className="price">price</p>
            </div>
            <div className="underline bg-white">
                <p className="name">main</p>
                <p className="price">price</p>
            </div>
            <button>Edit</button>
            <button>Delete</button>
        </div>
    )
}
