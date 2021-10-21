import * as React from 'react';
export interface IAppProps {
  image: any;
  name: string;
  description: string;
}

export default function Card({ image, name, description }: IAppProps) {

  return (
    <div className="flex flex-col sm:w-72 w-full p-8 rounded-2xl bg-white bg-opacity-40 transition duration-500 ease-in-out hover:bg-gray-200 transform hover:-translate-y-1 hover:scale-110">

      <img  className="rounded-full m-auto mb-6 w-32" src={image} alt="" />
      <p>{name}</p>
      <p className="m-6">{description}</p>
      <button className="m-2 p-2 bg-gray-400 rounded-full transition duration-300 ease-in-out hover:bg-blue-500" >Go to details</button>

    </div >
  );
}
