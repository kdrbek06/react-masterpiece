import * as React from 'react';

export interface IAppProps {
}

export default function App (props: IAppProps) {
  return (
    <nav className="flex item-center justify-between flex-wrap bg-gray-600 p-6">
      <div className="flex item-center flex-shrink-0 text-white mr-6">
        <a href="/"> <span  className="font-bold text-xl">Brand Name</span></a>
      </div>

      <div className="w-full block flex-grow sm:flex sm:items-center sm:w-auto">
        <ul className="text-sm sm:flex">
          <li><a href="" className="block mt-4 sm:inline-block sm:mt-0 text-teal-200 hover:text-white mr-4">Menus</a></li>
          <li><a href="/Reviews" className="block mt-4 sm:inline-block sm:mt-0 text-teal-200 hover:text-white mr-4">Reviews</a></li>
          <li><a href="/Payment" className="block mt-4 sm:inline-block sm:mt-0 text-teal-200 hover:text-white mr-4">Collabration</a></li>
          <li><a href="/" className="block mt-4 sm:inline-block sm:mt-0 text-teal-200 hover:text-white mr-4">Contact</a></li>
        </ul>
      </div>
      <div>
        <a href="Login" className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-blue-500 hover:bg-white mt-4 md:mt-0">Login</a>
      </div>

    </nav>
  );
}
