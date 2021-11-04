import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export interface IAppProps {
}

export default function App(props: IAppProps) {

  const [toggle, setToggle] = useState(false);


  return (
    <nav className="md:flex items-center justify-between text-white font-bold bg-black bg-opacity-70 p-4 md:py-4 md:px-12">

      <div className="flex justify-between">

        <Link to="/"> <a className="font-bold text-3xl">MY-KITCHEN</a> </Link>

        <button className="flex flex-col justify-evenly w-8 md:hidden" onClick={() => setToggle(!toggle)}>
          <span className="h-1 w-full border-2 bg-white rounded-lg"> </span>
          <span className="h-1 w-full border-2 bg-white rounded-lg"></span>
          <span className="h-1 w-full border-2 bg-white rounded-lg"></span>
        </button>

      </div>

      <div className={"md:block" + (toggle ? " hidden" : "")}>
        <Link to="/menus" className="navLinks">MENUS</Link>
        <Link to="/reviews" className="navLinks">REVIEWS</Link>
        <Link to="/cookdetails" className="navLinks">COOKDETAILS</Link>
        <Link to="/login" className="navLinks border-white border-2 p-2 rounded-2xl">LOGIN</Link>
      </div>

    </nav>
  );
}
