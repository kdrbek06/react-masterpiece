import React, { useState } from 'react';
import { useParams } from 'react-router-dom'
import CooksData from '../data/CooksData.json';
import ReviewsData from '../data/ReviewsData.json';
import ReviewCard from './ReviewCard';
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


// FETCHING RELATIVE COOK FROM DATABASE AS COOK -- IT RETURNS AN OBJECT
    const cook = CooksData.filter((cook) => cook.id.toString() === id)[0]

// FETCHING RELATIVE REVIEWS FOR COOK FROM DATABASE -- IT RETURNS AN ARRAY
    const cookReviews = ReviewsData.filter((review) => review.cookId.toString() === id)


    return (
        <div className="md:flex md:flex-wrap">

            <div className="w-11/12 p-10 mx-auto md:w-1/3">
                <img src={require(`./../image/${cook?.image}`).default} alt="" className="" /><br />
                <hr /><p><strong>Description: </strong> {cook?.description}</p><br />
                <hr /><span><strong>Rating</strong> </span>
            </div>


            <div className="w-11/12 p-10 mx-auto md:w-2/3">
                <hr /><p><strong>{cook?.name + " " + cook?.surname}</strong></p><br />

                <IconContext.Provider value={{ style: { display: "inline-block" } }}>
                    <p><span><RiMapPinLine /></span> {cook.city}</p>
                </IconContext.Provider>

                <div className="flex justify-evenly text-center my-4">
                    <button className="border-b-2 focus:border-blue-500  font-bold py-2 px-4" onClick={() => state !== 'about' && setState('about')}>About</button>
                    <button className="border-b-2 focus:border-blue-500  font-bold py-2 px-4" onClick={() => state !== 'reviews' && setState('reviews')}>Reviews</button>
                </div>

                <div className="w-full">
                    {state === 'about' ? <CookAbout /> : <div className="m-auto flex flex-wrap text-sm">{cookReviews.map((review, index) => <ReviewCard key={review.name + index} {...review} />)}</div>}
                </div>
            </div>









    


        </div>
    );
}





// console.log({cook});
//         const jsonString = JSON.stringify({link: "./../image/cook1.jpg"});
//         console.log({jsonString});
