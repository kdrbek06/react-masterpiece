import React from 'react';
import ReviewCard from './ReviewCard';
import Coll1 from '../image/coll1.png'







const reviews = [
  {
    image: "avatar.png",
    name: "Piet U.",
    comment: "Great food, would order again",
    date: "02/01/21",
  },
  {
    image: "avatar.png",
    name: "Piet U.",
    comment: "Great food, would order again",
    date: "02/01/21",
  },
  {
    image: "avatar.png",
    name: "Piet U.",
    comment: "Great food, would order again",
    date: "02/01/21",
  },
  {
    image: "avatar.png",
    name: "Piet U.",
    comment: "Great food, would order again",
    date: "02/01/21",
  }
];






export default function Reviews() {
  // function searchButton() {
  //   console.log('clicked')
  // }

  return (
    <>
      <form>
        <div className="mb-6 mx-5">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="searchReview">
            Add Review
          </label>
          <input className="shadow appearance-none border border-blue-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" id="password" type="text" placeholder="Search for a Cook"></input>
          <button className="text-lg font-semibold 
        bg-gray-800 w-full text-white rounded-lg
        px-6 py-3 block shadow-xl hover:text-white hover:bg-black">
            Add
          </button>
        </div>
      </form>






      <div className="mx-5 bg-white shadow-lg rounded-lg  px-4 py-4 max-w-sm ">
        <div className="mb-1 tracking-wide px-4 py-4" >
          <h2 className="text-gray-800 font-semibold mt-1">67 Users reviews</h2>
          <div className="border-b -mx-8 px-8 pb-3">
            <div className="flex items-center mt-1">
              <div className=" w-1/5 text-indigo-500 tracking-tighter">
                <span>5 star</span>
              </div>
              <div className="w-3/5">
                <div className="bg-gray-300 w-full rounded-lg h-2">
                  <div className=" w-7/12 bg-indigo-600 rounded-lg h-2"></div>
                </div>
              </div>
              <div className="w-1/5 text-gray-700 pl-3">
                <span className="text-sm">51%</span>
              </div>
            </div>
            <div className="flex items-center mt-1">
              <div className="w-1/5 text-indigo-500 tracking-tighter">
                <span>4 star</span>
              </div>
              <div className="w-3/5">
                <div className="bg-gray-300 w-full rounded-lg h-2">
                  <div className="w-1/5 bg-indigo-600 rounded-lg h-2"></div>
                </div>
              </div>
              <div className="w-1/5 text-gray-700 pl-3">
                <span className="text-sm">17%</span>
              </div>
            </div>
            <div className="flex items-center mt-1">
              <div className="w-1/5 text-indigo-500 tracking-tighter">
                <span>3 star</span>
              </div>
              <div className="w-3/5">
                <div className="bg-gray-300 w-full rounded-lg h-2">
                  <div className=" w-3/12 bg-indigo-600 rounded-lg h-2"></div>
                </div>
              </div>
              <div className="w-1/5 text-gray-700 pl-3">
                <span className="text-sm">19%</span>
              </div>
            </div>
            <div className="flex items-center mt-1">
              <div className=" w-1/5 text-indigo-500 tracking-tighter">
                <span>2 star</span>
              </div>
              <div className="w-3/5">
                <div className="bg-gray-300 w-full rounded-lg h-2">
                  <div className=" w-1/5 bg-indigo-600 rounded-lg h-2"></div>
                </div>
              </div>
              <div className="w-1/5 text-gray-700 pl-3">
                <span className="text-sm">8%</span>
              </div>
            </div>
            <div className="flex items-center mt-1">
              <div className="w-1/5 text-indigo-500 tracking-tighter">
                <span>1 star</span>
              </div>
              <div className="w-3/5">
                <div className="bg-gray-300 w-full rounded-lg h-2">
                  <div className=" w-2/12 bg-indigo-600 rounded-lg h-2"></div>
                </div>
              </div>
              <div className="w-1/5 text-gray-700 pl-3">
                <span className="text-sm">5%</span>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full px-4">
          <h3 className="font-medium tracking-tight">Review this item</h3>
          <p className="text-gray-700 text-sm py-1">
            give your opinion about this item.
          </p>
          <button className="bg-gray-100 border border-gray-400 px-3 py-1 rounded  text-gray-800 mt-2">write a review</button>
        </div>
      </div>



      <div className="flex flex-wrap text-center items-center justify-center">
        {reviews.map((review) => <ReviewCard {...review} />)}
      </div>

    </>
  )
}

