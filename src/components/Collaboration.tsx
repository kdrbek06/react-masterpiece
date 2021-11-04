import * as React from 'react';
import Coll1 from '../image/coll1.png'
import Coll2 from '../image/coll2.png'
import Coll3 from '../image/coll3.png'



export interface IAppProps {
}

export default function App(props: IAppProps) {



  return (
    <div className="text-center bg-yellow-100 px-6 py-24">

      <h2 className="text-3xl font-bold" >COLLABORATION</h2>

      <section className="p-10 min-h-screen flex md:flex-row items-center justify-around flex-wrap sm:flex-col">

        <div className="h-32 w-32 relative cursor-pointer mb-5">
          <div className="absolute inset-0 bg-white opacity-5 rounded-lg shadow-2xl"></div>
          <div className="absolute inset-0 transform  hover:rotate-45 transition duration-300">
            <div className="flex justify-evenly my-12">
              <img src={Coll1} className="w-12 rounded-full" />
            </div>
          </div>
        </div>

        <img src={Coll2} className="w-12 rounded-full" />
        <img src={Coll3} className="w-12 rounded-full" />
        <img src={Coll1} className="w-12 rounded-full" />
        <img src={Coll2} className="w-12 rounded-full" />

      </section>

    </div>

  );
}
