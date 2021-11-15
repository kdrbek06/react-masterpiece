import React, { useState } from 'react';
import { useParams } from 'react-router-dom'
import CooksData from '../data/CooksData.json';
import ReviewsData from '../data/ReviewsData.json';
import ReviewCard from './ReviewCard';
import CookAbout from './CookAbout'

import { RiMapPinLine } from "react-icons/ri";
import { IconContext } from "react-icons";

export default function CookDetails() {

    const { id } = useParams<{ id: string }>();

    // "|" is a OR operator
    const [state, setState] = useState<'about' | 'reviews'>('about')

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
                <div className="flex items-center mx-auto mt-1 hover:scale-125">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" className="hover:scale-150 w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 1792 1792">
                          <path d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z">
                          </path>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 1792 1792">
                          <path d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z">
                          </path>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 1792 1792">
                          <path d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z">
                          </path>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 1792 1792">
                          <path d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z">
                          </path>
                        </svg>
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 1792 1792">
                          <path d="M1728 647q0 22-26 48l-363 354 86 500q1 7 1 20 0 21-10.5 35.5t-30.5 14.5q-19 0-40-12l-449-236-449 236q-22 12-40 12-21 0-31.5-14.5t-10.5-35.5q0-6 2-20l86-500-364-354q-25-27-25-48 0-37 56-46l502-73 225-455q19-41 49-41t49 41l225 455 502 73q56 9 56 46z">
                          </path>
                        </svg>
                      </div>
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
