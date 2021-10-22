import React from 'react'
import MainCarousel from '../components/MainCarousel';
import AboutUs from './AboutUs';
import Cooks from '../components/Cooks'
import Collaboration from './Collaboration';
import ReviewCard from './ReviewCard';

import Cook1 from '../image/cook1.jpg';
import Cook2 from '../image/cook2.jpg';
import Cook3 from '../image/cook3.jpg';
import Cook4 from '../image/cook4.jpg';
import Coll1 from '../image/coll1.png'



const reviews = [
    {
        image: Coll1,
        name: "Piet U.",
        comment: "Great food, would order again. Lorem, ipsum dolor sit amet consectetur adipisicing elit",
        date: "02/01/21",
    },
    {
        image: Coll1,
        name: "Piet U.",
        comment: "consectetur adipisicing elit. Porro, adipisci ratione.Great food, would order again",
        date: "02/01/21",
    }, {
        image: Coll1,
        name: "Piet U.",
        comment: "Great food, would order again. Lorem, ipsum dolor sit amet consectetur adipisicing elit",
        date: "02/01/21",
    },
    {
        image: Coll1,
        name: "Piet U.",
        comment: "adipisicing elit. Porro, adipisci ratione.Great food, would order again",
        date: "02/01/21",
    }
];




export const COOKS = [
    {
        image: Cook1,
        name: "BERT",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo totam facilis aliquid!",
        id: 1,
    },
    {
        image: Cook2,
        name: "ERWIN",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo totam facilis aliquid!",
        id: 2,

    },
    {
        image: Cook3,
        name: "BASILE",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo totam facilis aliquid!",
        id: 3,

    },
    {
        image: Cook4,
        name: "SHARON",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo totam facilis aliquid!",
        id:4,

    }
];


export default function MainPage() {
    return (
        <div>

            <MainCarousel />
            <AboutUs />
             



            <div className="text-center bg-yellow-200 py-8">
                <h2 className="my-4 text-3xl font-bold" >COOKS</h2>
                <div className="flex flex-wrap text-center items-center justify-evenly p-8">
                    {COOKS.map((cook, index) => <Cooks key={cook.name + index} {...cook} />)}
                    
                </div>
            </div>



            <div className="text-center p-8">
                <h2 className="my-8 text-3xl font-bold" >OUR CLIENTS LOVE US</h2>
                <div className="flex flex-wrap text-center items-center justify-center">
                    {reviews.map((review, index) => <ReviewCard key={review.name + index} {...review} />)}
                </div>
            </div>



            <Collaboration />


        </div>
    )
}
