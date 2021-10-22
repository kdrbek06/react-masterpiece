import React from 'react'
import MainCarousel from '../components/MainCarousel';
import Cooks from '../components/Cooks'

import Cook1 from '../image/cook1.jpg';
import Cook2 from '../image/cook2.jpg';
import Cook3 from '../image/cook3.jpg';
import Cook4 from '../image/cook4.jpg';
import ReviewCard from './ReviewCard';
import Collaboration from './Collaboration';
import Coll1 from '../image/coll1.png'




const reviews = [
    {
        image: Coll1,
        name: "Piet U.",
        comment: "Great food, would order again",
        date: "02/01/21",
    },
    {
        image: Coll1,
        name: "Piet U.",
        comment: "Great food, would order again",
        date: "02/01/21",
    }, {
        image: Coll1,
        name: "Piet U.",
        comment: "Great food, would order again",
        date: "02/01/21",
    },
    {
        image: Coll1,
        name: "Piet U.",
        comment: "Great food, would order again",
        date: "02/01/21",
    }
];




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



            <div className="text-center bg-yellow-200 py-8">
                <h2 className="my-4 text-3xl font-bold" >COOKS</h2>
                <div className="flex flex-wrap text-center items-center justify-evenly p-8">
                    {COOKS.map((skill, index) => <Cooks key={skill.name + index} {...skill} />)}
                </div>
            </div>



            <div className="text-center bg-gray-300 p-8">
                <h2 className="my-8 text-3xl font-bold" >OUR CLIENTS LOVE US</h2>
                <div className="flex flex-wrap text-center items-center justify-center">
                    {reviews.map((review) => <ReviewCard {...review} />)}
                </div>
            </div>



            <Collaboration />







        </div>
    )
}
