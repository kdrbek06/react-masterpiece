import React, { useState } from 'react';


export interface IAppProps {
}

export default function App(props: IAppProps) {

  const [image, setImage] = useState<number>(0);

  const handleLeftArrow = () => setImage(image === 0 ? 6 : image - 1)
  const handleRightArrow = () => setImage(image === 6 ? 0 : image + 1)

  return (
    <div className={`mainCarousel min-h-full transition-all duration-1000 bg-hero-${image}`}>
      <div className="flex flex-auto justify-between items-center">
        <span className="carouselArrow" onClick={handleLeftArrow}> &lt;</span>
        <span className="carouselArrow" onClick={handleRightArrow}> &gt;</span>
      </div>

      <div className="flex justify-center">
        {[0,1,2,3,4,5,6].map((item, index)=> <span key={item + ''} className={`text-center m-2 leading-none align-middle w-4 h-4 bg-gray-400 rounded-full ${image === index && 'bg-gray-800'}`}> </span> )}
      </div>


    </div>
  );
}
