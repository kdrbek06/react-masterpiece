import * as React from 'react';
import Col1 from '../image/col1.png'
import Col2 from '../image/col2.png'
import Col3 from '../image/col3.png'
import Col4 from '../image/col4.png'
import Col5 from '../image/col5.png'
import Col6 from '../image/col6.png'
import Col7 from '../image/col7.png'
import Col8 from '../image/col8.png'




const collaborationBrands = [Col1, Col2, Col3, Col4, Col5, Col6, Col7, Col8];

export interface IAppProps {
}

export default function App(props: IAppProps) {



  return (
    <div className="text-center px-6 py-24">

      <h2 className="modifiedH2" >Collaboration</h2>

      <section className="p-10 min-h-screen flex md:flex-row items-center justify-evenly flex-wrap">

        {collaborationBrands.map(item => <div className="flex place-items-center cursor-pointer h-32 w-32 m-3 p-2 transform  hover:scale-150 transition duration-300 ease-in-out">
          <img src={item} alt="collaboration"/></div>)}
          
      </section>

    </div>

  );
}
