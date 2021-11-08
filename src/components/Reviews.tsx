import ReviewCard from './ReviewCard';
import Coll1 from '../image/coll1.png';
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

const state = { showDiv : true}




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

      <div className="flex flex-wrap text-center items-center justify-center">
        {reviews.map((review) => <ReviewCard {...review} />)}
      </div>

    </>
  )
}

function menus(menus: any) {
  throw new Error('Function not implemented.');
}

