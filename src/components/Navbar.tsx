import * as React from 'react';
import { Link } from 'react-router-dom';


export interface IAppProps {
}

export default function App(props: IAppProps) {
  return (
    <nav className="flex items-center flex-wrap bg-gray-400 p-6">

     

      <div className="items-center justify-center w-full block flex-grow sm:flex sm:items-center sm:w-auto">
        <Link to="/Menus" className="navLinks">Menus</Link>
        <Link to="/Reviews" className="navLinks">Reviews</Link>

        <div className="flex items-center justify-self-center">
        <Link to="/"> <span className=" flex flex-shrink-0 text-white font-bold text-3xl">KITCHEN</span> </Link>
        </div>

        <Link to="/Payments" className="navLinks">Collaboration</Link>
        <a href="#contacts" className="navLinks">Contact</a>
      </div>



      <div>
        <Link to="/Login" className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-blue-500 hover:bg-white mt-4 md:mt-0">Login</Link>
      </div>

    </nav>
  );
}


// <Link to="/"><button>Home</button></Link>
//         <Link to="/Login"><button>Login</button></Link>
//         <Link to="/Reviews"><button>Reviews</button></Link>
//         <Link to="/Payments"><button>Payment</button></Link>