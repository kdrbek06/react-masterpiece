import React, { useEffect, useState} from 'react';
import MenuCard from './MenuCard';

// export interface IStarter {
//     name: string;
//     priceStarter: number;
// }

// export interface Main {
//     name: string;
//     priceMain: number;
// }

// export interface Dessert {
//   name: string;
//   priceDessert: number;
// }

// export interface RootObject {
//   id: number;
//   day: string;
//   starter: string;
//   main: string;
//   dessert: string;
// }
// Menus({ id, day, starter, main, dessert}: RootObject)
export default function Menus() {

  return (
    <>
    <div>
      {/* <div>{id}</div>
      <div>{day}</div>
      <div>{starter}</div>
      <div>{main}</div>
      <div>{dessert}</div> */}

      <MenuCard />
    </div>
    </>
  )
}

