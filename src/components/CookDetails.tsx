import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import CooksData from '../data/CooksData.json';
import { ICook } from './Cooks';
import CookCard from './CookCard'


import { RiMapPinLine } from "react-icons/ri";
import { IconContext } from "react-icons";


export interface IAppProps {


}

export default function CookDetails(props: IAppProps) {

    const { id } = useParams<{ id: string }>();


    // "|" is a OR operator

    const [state, setState] = useState<'about' | 'reviews'>('about')

    // const cook = COOKS.filter((item) => item.id.toString() === id)[0]

    // const cook =  data.filter((item) => item.id.toString() === id)[0]



    // const [cook, setCook] = useState<ICook | undefined>(undefined)








        const cook = CooksData.filter((cook) => cook.id.toString() == id)[0]

        


    return (
        <div>
            <div className="w-full p-10 m-auto">

                {/* <img src={require("./../image/cook1.jpg").default} alt="" className="" /><br /> */}


                <img src={require(`./../image/${cook?.image}`).default} alt="" className="" /><br />


                <hr /><p><strong>Description: </strong> {cook?.description}</p><br />
                <hr /><span><strong>Rating</strong> </span>
            </div>

            <div className="w-full p-10 m-auto">
                <hr /><p><strong>Name: </strong>{cook?.name}</p>

                <IconContext.Provider value={{ style: { display: "inline-block" } }}>
                    <p><span><RiMapPinLine /></span> Location</p>
                </IconContext.Provider>

                <button onClick={() => state !== 'about' && setState('about')}>About</button>
                <button onClick={() => state !== 'reviews' && setState('reviews')}>Reviews</button>
                <div>
                    {state === 'about' ? <p><CookCard /></p> : <p>Reviews</p>}
                </div>


            </div>

        </div>
    );
}





// console.log({cook});
//         const jsonString = JSON.stringify({link: "./../image/cook1.jpg"});
//         console.log({jsonString});
