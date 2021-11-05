import * as React from 'react';
import { Link } from 'react-router-dom'


export interface ICook {
  image: any;
  name: string;
  description: string;
  id: number;
}

export default function Card({ image, name, description, id }: ICook) {

  return (
    <div className="flex flex-col w-full sm:w-4/5 md:w-72  m-4 p-4 rounded-2xl bg-white bg-opacity-40 transition duration-500 ease-in-out hover:bg-gray-200 transform hover:-translate-y-1 hover:scale-110">

      <img className="rounded-full m-auto mb-6 w-32 h-32" src={require(`./../image/${image}`).default} alt="" />
      <p>{name}</p>
      <p className="m-6">{description}</p>
      <Link to={`/Cookdetails/${id}`} className="m-2 p-2 bg-gray-400 rounded-full transition duration-300 ease-in-out hover:bg-darkkhaki" >Go to details</Link>

    </div >
  );
}
