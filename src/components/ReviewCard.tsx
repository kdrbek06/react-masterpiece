import React, { Component, useState } from 'react';
import { FaStar } from "react-icons/fa";

export default function ReviewCard() {

  return (




    <div className="testimonial-1 py-4 md:py-12 text-center ">

      <div className="container px-4 m-auto">
        <div className="md:flex md:flex-wrap md:-mx-4 mb-4">

          <div className="md:w-1/2 md:px-4 mt-6 md:mt-0">
            <div className="testimonial p-6 border-2 border-solid flex hover:border-indigo-400 hover:bg-indigo-100 transition-colors duration-300">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden mr-4 md:mr-6 flex-shrink-0">
                <img src="//via.placeholder.com/100/eee" alt="profile image" className="w-full h-full object-cover"></img>
              </div>
              <div>
                <p className="text-gray-600">"Great food, would order again"</p>
                <div className="text-gray-900 font-bold uppercase mt-6">- Piet U.</div>
                <div className="text-blue-600">02/01/21</div>
              </div>
            </div>
          </div>

          <div className="md:w-1/2 md:px-4 mt-6 md:mt-0">
            <div className="testimonial p-6 border-2 border-solid flex hover:border-indigo-400 hover:bg-indigo-100 transition-colors duration-300">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden mr-4 md:mr-6 flex-shrink-0">
                <img src="//via.placeholder.com/100/eee" alt="profile image" className="w-full h-full object-cover"></img>
              </div>
              <div>
                <p className="text-gray-600">"This food suxx"</p>
                <div className="text-gray-900 font-bold uppercase mt-6">- Rudy J.</div>
                <div className="text-blue-600">12/01/21</div>
              </div>
            </div>
          </div>

          <div className="md:w-1/2 md:px-4 mt-6">
            <div className="testimonial p-6 border-2 border-solid flex hover:border-indigo-400 hover:bg-indigo-100 transition-colors duration-300">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden mr-4 md:mr-6 flex-shrink-0">
                <img src="//via.placeholder.com/100/eee" alt="profile image" className="w-full h-full object-cover"></img>
              </div>
              <div>
                <p className="text-gray-600">"Average but for a good price"</p>
                <div className="text-gray-900 font-bold uppercase mt-6">- Louis L.</div>
                <div className="text-blue-600">01/02/21</div>
              </div>
            </div>
          </div>

          <div className="md:w-1/2 md:px-4 mt-6">
            <div className="testimonial p-6 border-2 border-solid flex hover:border-indigo-400 hover:bg-indigo-100 transition-colors duration-300">
              <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden mr-4 md:mr-6 flex-shrink-0">
                <img src="//via.placeholder.com/100/eee" alt="profile image" className="w-full h-full object-cover"></img>
              </div>
              <div>
                <p className="text-gray-600">"I don't feel well after this"</p>
                <div className="text-gray-900 font-bold uppercase mt-6">- Nick G.</div>
                <div className="text-blue-600">20/02/21</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}



