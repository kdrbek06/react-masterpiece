import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'
import CooksData from '../data/CooksData.json';
import ReviewsData from '../data/ReviewsData.json';
import ReviewCard from './ReviewCard';

import { ICook } from './Cooks';
import CookAbout from './CookAbout'


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

    const cookReviews = ReviewsData.filter((review) => review.cookId.toString() == id)
    

    return (
        <div>
            <div className="w-full p-10 m-auto">

                {/* <img src={require("./../image/cook1.jpg").default} alt="" className="" /><br /> */}


                <img src={require(`./../image/${cook?.image}`).default} alt="" className="" /><br />


                <hr /><p><strong>Description: </strong> {cook?.description}</p><br />
                <hr /><span><strong>Rating</strong> </span>
            </div>

            <div className="w-full p-10 m-auto">
                <hr /><p><strong>{cook?.name + " " + cook?.surname}</strong></p><br />

                <IconContext.Provider value={{ style: { display: "inline-block" } }}>
                    <p><span><RiMapPinLine /></span> Location</p>
                </IconContext.Provider>

                <div className="flex justify-evenly text-center my-4">

                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={() => state !== 'about' && setState('about')}>About</button>
                    <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full" onClick={() => state !== 'reviews' && setState('reviews')}>Reviews</button>

                </div>


                <div>
                    {state === 'about' ? <CookAbout /> : <div>{cookReviews.map((review, index) => <ReviewCard key={review.name + index} {...review} />)}</div>}
                </div>


            </div>

        </div>
    );
}





// console.log({cook});
//         const jsonString = JSON.stringify({link: "./../image/cook1.jpg"});
//         console.log({jsonString});
