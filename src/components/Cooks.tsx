import * as React from 'react';
export interface IAppProps {
  image: any;
  name: string;
  description: string;
}

export default function Card({ image, name, description }: IAppProps) {

  return (
    <div className="m-4 w-1/5 p-8 rounded-2xl bg-white bg-opacity-40 z-10">

      <img  className="rounded-full m-auto mb-6" src={image} width="125px" height="150px" alt="" />
      <p>{name}</p>
      <p className="py-6">{description}</p>
      <button className="bg-gray-400 rounded-full py-2 px-6" >Go to details</button>

    </div >
  );
}
