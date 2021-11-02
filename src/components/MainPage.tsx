import React from 'react'
import MainCarousel from '../components/MainCarousel';
import AboutUs from './AboutUs';
import Cooks from '../components/Cooks'
import Collaboration from './Collaboration';
import ReviewCard from './ReviewCard';


import ReviewsData from '../data/ReviewsData.json'
import CooksData from '../data/CooksData.json'







export default function MainPage() {
    return (
        <div>

            <MainCarousel />
            <AboutUs />
             



            <div className="text-center bg-yellow-100 py-8">
                <h2 className="my-4 text-3xl font-bold" >COOKS</h2>
                <div className="flex flex-wrap text-center items-center justify-evenly p-8">
                    {CooksData.map((cook, index) => <Cooks key={cook.name + index} {...cook} />)}
                    
                </div>
            </div>



            <div className="text-center p-8 m-8">
                <h2 className="my-8 text-3xl font-bold" >OUR CLIENTS LOVE US</h2>
                <div className="text-center sm:flex sm:flex-wrap md:m-8">
                    {ReviewsData.map((review, index) => <ReviewCard key={review.name + index} {...review} />)}
                </div>
            </div>



            <Collaboration />


        </div>
    )
}
