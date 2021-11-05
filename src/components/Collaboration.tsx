import * as React from 'react';
import Col1 from '../image/col1.png'
import Col2 from '../image/col2.png'
import Col3 from '../image/col3.png'
import Col4 from '../image/col4.png'
import Col5 from '../image/col5.png'
import Col6 from '../image/col6.png'
import Col7 from '../image/col7.png'
import Col8 from '../image/col8.png'
import Col9 from '../image/col9.png'
import Col10 from '../image/col10.png'
import Col11 from '../image/col11.png'



export interface IAppProps {
}

export default function App(props: IAppProps) {



  return (
    <div className="text-center px-6 py-24">

      <h2 className="modifiedH2" >Collaboration</h2>

      <section className="p-10 min-h-screen flex md:flex-row items-center justify-around flex-wrap">

        <div className="h-32 w-32 relative cursor-pointer mb-5">
          <div className="absolute inset-0 bg-white opacity-5 rounded-lg shadow-2xl"></div>
          <div className="absolute inset-0 transform  hover:rotate-45 transition duration-300">
            <div className="flex justify-evenly my-12">
              <img src={Col1} className="rounded-full" />
            </div>
          </div>
        </div>
        <div className="h-32 w-32 relative cursor-pointer mb-5">
          <div className="absolute inset-0 bg-white opacity-5 rounded-lg shadow-2xl"></div>
          <div className="absolute inset-0 transform  hover:rotate-45 transition duration-300">
            <div className="flex justify-evenly my-12">
              <img src={Col2} className=" rounded-full" />
            </div>
          </div>
        </div>
        <div className="h-32 w-32 relative cursor-pointer mb-5">
          <div className="absolute inset-0 bg-white opacity-5 rounded-lg shadow-2xl"></div>
          <div className="absolute inset-0 transform  hover:rotate-45 transition duration-300">
            <div className="flex justify-evenly my-12">
              <img src={Col3} className=" rounded-full" />
            </div>
          </div>
        </div>
        <div className="h-32 w-32 relative cursor-pointer mb-5">
          <div className="absolute inset-0 bg-white opacity-5 rounded-lg shadow-2xl"></div>
          <div className="absolute inset-0 transform  hover:rotate-45 transition duration-300">
            <div className="flex justify-evenly my-12">
              <img src={Col4} className=" rounded-full" />
            </div>
          </div>
        </div>
        <div className="h-32 w-32 relative cursor-pointer mb-5">
          <div className="absolute inset-0 bg-white opacity-5 rounded-lg shadow-2xl"></div>
          <div className="absolute inset-0 transform  hover:rotate-45 transition duration-300">
            <div className="flex justify-evenly my-12">
              <img src={Col5} className=" rounded-full" />
            </div>
          </div>
        </div>
        <div className="h-32 w-32 relative cursor-pointer mb-5">
          <div className="absolute inset-0 bg-white opacity-5 rounded-lg shadow-2xl"></div>
          <div className="absolute inset-0 transform  hover:rotate-45 transition duration-300">
            <div className="flex justify-evenly my-12">
              <img src={Col6} className=" rounded-full" />
            </div>
          </div>
        </div>
        <div className="h-32 w-32 relative cursor-pointer m-auto">
          <div className="absolute inset-0 bg-white opacity-5 rounded-lg shadow-2xl"></div>
          <div className="absolute inset-0 transform  hover:rotate-45 transition duration-300">
            <div className="flex justify-evenly my-12">
              <img src={Col7} className=" rounded-full" />
            </div>
          </div>
        </div>
        <div className="h-32 w-32 relative cursor-pointer m-auto">
          <div className="absolute inset-0 bg-white opacity-5 rounded-lg shadow-2xl"></div>
          <div className="absolute inset-0 transform  hover:rotate-45 transition duration-300">
            <div className="flex justify-evenly my-12">
              <img src={Col8} className=" rounded-full" />
            </div>
          </div>
        </div>
        <div className="h-32 w-32 relative cursor-pointer mb-5">
          <div className="absolute inset-0 bg-white opacity-5 rounded-lg shadow-2xl"></div>
          <div className="absolute inset-0 transform  hover:rotate-45 transition duration-300">
            <div className="flex justify-evenly my-12">
              <img src={Col9} className=" rounded-full" />
            </div>
          </div>
        </div>
        <div className="h-32 w-32 relative cursor-pointer mb-5">
          <div className="absolute inset-0 bg-white opacity-5 rounded-lg shadow-2xl"></div>
          <div className="absolute inset-0 transform  hover:rotate-45 transition duration-300">
            <div className="flex justify-evenly my-12">
              <img src={Col10} className=" rounded-full" />
            </div>
          </div>
        </div>
        <div className="h-32 w-32 relative cursor-pointer mb-5">
          <div className="absolute inset-0 bg-white opacity-5 rounded-lg shadow-2xl"></div>
          <div className="absolute inset-0 transform  hover:rotate-45 transition duration-300">
            <div className="flex justify-evenly my-12">
              <img src={Col11} className=" rounded-full" />
            </div>
          </div>
        </div>

      </section>

    </div>

  );
}
