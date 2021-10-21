import React, { Component, useState } from 'react';
import { FaStar } from "react-icons/fa";


export interface IAppProps {
  image: any;
  name: string;
  comment: string;
  date: string;
}


export default function ReviewCard({ image, comment, name, date }: IAppProps) {

  return (

    <div className="testimonial flex text-center sm:w-5/12 p-6 my-8 border-2 border-solid rounded-2xl bg-white bg-opacity-40 hover:border-indigo-400 hover:bg-indigo-100 transition-colors duration-300">

      <img src={image} alt="profile image" className="m-2 w-20 rounded-full"></img>

      <div className="m-auto text-center">
        <p className="text-gray-600">{comment}</p>
        <div className="text-gray-900 font-bold uppercase mt-6">{name}</div>
        <div className="text-blue-600">{date}</div>
      </div>

    </div>

  )
}



