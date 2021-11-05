import React from 'react';


export interface IAppProps {
  image: any;
  name: string;
  comment: string;
  date: string;
}


export default function ReviewCard({ image, comment, name, date }: IAppProps) {

  return (

    <div className="testimonial w-full sm:w-1/2 text-center flex flex-col justify-between	my-6 p-6 sm:mx6 bg-white bg-opacity-40 hover:border-indigo-400 hover:bg-indigo-100 transition-colors duration-300">

      <div>
        <img src={require(`./../image/${image}`).default} alt="image" className="mx-auto w-20 opacity-70 block xl:inline rounded-full"></img>
        <p className="text-gray-500">{comment}</p>
      </div>
      <div>
        <p className="text-gray-900 font-bold uppercase mt-6">{name}</p>
        <p className="text-blue-600">{date}</p>
      </div>




    </div>

  )
}



