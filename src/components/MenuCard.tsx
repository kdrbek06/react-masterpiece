import React from 'react';


export default function MenuCard() {
  return (
    <div className="md:container md:mx-auto mx-auto px-4">
      <div className="box-border md:box-content h-750 w-900 p-4 border-4 ">
      <div className="box-border md:box-content h-350 w-800 p-4 border-4 text-center decoration-clone bg-gradient-to-b from-green-100 to-blue-150 text-transparent text-purple-500 text-opacity-50 text-6xl">
        Menu Card
      </div>
      <div className="grid grid-cols-3 grid-template-columns: repeat(6, minmax(0, 1fr))">
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <div>4</div>
      <div>5</div>
      <div>6</div>
      </div>
      </div>
    </div>
  )
}

