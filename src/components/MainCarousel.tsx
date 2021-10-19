import React, { useState } from 'react';


export interface IAppProps {
}

export default function App(props: IAppProps) {

  const [image, setImage] = useState<number>(0);

  const handleLeftArrow = () => setImage(image === 0 ? 2 : image - 1)
  const handleRightArrow = () => setImage(image === 2 ? 0 : image + 1)

  return (
    <div className="mainCarousel">
      <div className={`bg-hero-${image} absolute inset-0 -mt-12 -z-1 backgroundMatrix`}></div>
      <div className="flex-auto justify-between items-center flex">
        <span className="carouselArrow" onClick={handleLeftArrow}> &lt;</span>
        <span className="carouselArrow" onClick={handleRightArrow}> &gt;</span>
      </div>

      <div className="flex justify-center">
        {[0,1,2].map((item, index)=> <span key={item + ''} className={`my-6 mx-2 ${image === index && 'bg-green-300'}`}>O</span> )}
        
        {/* <span className={`my-6 mx-2 ${image === 1 && 'bg-green-300'}`}>O</span>
        <span className={`my-6 mx-2 ${image === 2 && 'bg-green-300'}`}>O</span> */}
      </div>


    </div>
  );
}
