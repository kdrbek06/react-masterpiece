import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import { COOKS } from './MainPage';
import { ICook } from './Cooks';


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



    const [cook, setCook] = useState< ICook | undefined >(undefined)


// DATABASE

useEffect(() => {
    fetch(`http://localhost:3000/cooks?id=${id}`)
    .then((result) => result.json())
    .then(data => setCook(data))
    .catch((err) => console.log(err))
}, [])




    return (
        <div>
            <div className="w-full p-10 m-auto">
                <img src={require('../image/cook1.jpg').default} alt="" className="" /><br />
                <hr /><p><strong>Description: </strong> {cook?.description}</p><br />
                <hr /><span><strong>Rating</strong> </span>
            </div>

            <div className="w-full p-10 m-auto">
                <hr /><p><strong>Name: </strong>{cook?.name}</p>

                <IconContext.Provider value={{ style: { display: "inline-block" } }}>
                    <p><span><RiMapPinLine /></span> Location</p>
                </IconContext.Provider>

                <button onClick={() => state !== 'about' && setState('about') }>About</button>
                <button onClick={() => state !== 'reviews' && setState('reviews')}>Reviews</button>
                <div>
                    {state === 'about' ? <p>{cook?.name}</p> : <p>Reviews</p>}
                </div>


            </div>

        </div>
    );
}



