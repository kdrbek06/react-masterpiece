import React from 'react'
import MainCarousel from '../components/MainCarousel';
import Cooks from '../components/Cooks'

import Cook1 from '../image/cook1.jpg';
import Cook2 from '../image/cook2.jpg';
import Cook3 from '../image/cook3.jpg';
import Cook4 from '../image/cook4.jpg';
import ReviewCard from './ReviewCard';





const COOKS = [
    {
        image: Cook1,
        name: "BERT",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo totam facilis aliquid!",
    },
    {
        image: Cook2,
        name: "ERWIN",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo totam facilis aliquid!",
    },
    {
        image: Cook3,
        name: "BASILE",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo totam facilis aliquid!",
    },
    {
        image: Cook4,
        name: "SHARON",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo totam facilis aliquid!",
    }
];


export default function MainPage() {
    return (
        <div>
            <MainCarousel />
            <div className="flex text-center items-center justify-around flex-wrap px-6 py-24 relative">
                <div className="absolute bg-white inset-0 py-12 backgroundMatrix">
                    <div className="bg-yellow-300 w-full h-full "></div>
                </div>
                {COOKS.map((skill, index) => <Cooks key={skill.name + index} {...skill} />)}
            </div>




            <div className="text-center">
                <h2 className="my-8 text-3xl font-bold" >OUR CLIENTS LOVE US</h2>
                <ReviewCard />
            </div>







        </div>
    )
}
