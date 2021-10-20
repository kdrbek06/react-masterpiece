import * as React from 'react';
import Coll1 from '../image/coll1.png'
import Coll2 from '../image/coll2.png'
import Coll3 from '../image/coll3.png'



export interface IAppProps {
}

export default function App(props: IAppProps) {
  return (
    <div className="text-center bg-yellow-300 px-6 py-16">

      <h2 className="text-3xl font-bold" >COLLABORATION</h2>

      <div className="flex justify-evenly my-12">
        <img src={Coll1} className="w-12 rounded-full" />
        <img src={Coll2} className="w-12 rounded-full" />
        <img src={Coll3} className="w-12 rounded-full" />
        <img src={Coll1} className="w-12 rounded-full" />
        <img src={Coll2} className="w-12 rounded-full" />
      </div>



    </div>

  );
}
