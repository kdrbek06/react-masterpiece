import * as React from 'react';
import { Link } from 'react-router-dom';


export interface IAppProps {
}

export default function App(props: IAppProps) {
  return (
    <nav className="items-center justify-between md:flex text-white font-bold bg-black bg-opacity-70 py-6 px-16">


      <div className="">
        <Link to="/"> <span className=" flex flex-shrink-0  font-bold text-3xl">MY-KITCHEN</span> </Link>
      </div>

      <div className="">
        <Link to="/menus" className="navLinks">MENUS</Link>
        <Link to="/reviews" className="navLinks">REVIEWS</Link>
        <Link to="/cookdetails" className="navLinks">COOKDETAILS</Link>
        <Link to="/login" className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-blue-500 hover:bg-white mt-4 md:mt-0">LOGIN</Link>
      </div>


    </nav>
  );
}


// <Link to="/"><button>Home</button></Link>
//         <Link to="/Login"><button>Login</button></Link>
//         <Link to="/Reviews"><button>Reviews</button></Link>
//         <Link to="/Payments"><button>Payment</button></Link>