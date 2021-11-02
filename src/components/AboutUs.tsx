import * as React from 'react';
import aboutImg from '../image/about-img.jpg';
import aboutImg2 from '../image/about-img2.jpg';
import aboutImg3 from '../image/about-img3.jpg';

export interface IAppProps {
}

export default function App(props: IAppProps) {
  return (
    <div className="m-2 p-2 lg:m-16 text-center">
      <h2 className="my-4 text-3xl font-bold" >About Us</h2>
      <p className="m-auto md:w-1/2 mb-8">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quod minus quisquam impedit hic laborum cupiditate vel harum voluptas enim commodi.</p>

      <div className="md:flex justify-evenly items-center p-8">
        <p className="max-w-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur nobis perferendis aspernatur iusto enim! Libero voluptatum repudiandae nisi nam, asperiores sapiente ea fugit officia ut labore voluptates ipsum debitis qui ullam eius veniam doloremque aspernatur. Ducimus natus illo dolorem dignissimos aliquam quas assumenda sapiente rerum non quidem! Voluptate aut, id nesciunt optio blanditiis illo voluptas quod consequatur sapiente, perferendis perspiciatis.</p>
        <img src={aboutImg} className="w-full md:w-1/3 transform transition duration-500 hover:scale-125" alt="" />
      </div>

      <div className="md:flex justify-evenly items-center p-8">
        <img src={aboutImg2} className="w-full md:w-1/3 transform transition duration-500 hover:scale-125" alt="" />
        <p className="max-w-xl">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Neque nisi numquam amet impedit harum, voluptate id saepe sequi similique commodi, consequuntur tempore autem ab quod provident deserunt. Alias, inventore repudiandae. Ratione harum pariatur, impedit illum voluptatem exercitationem id magnam. Repellat aliquam quam a perferendis quia fugiat. Accusamus alias autem maxime ipsam. Ut vitae deserunt beatae.</p>
      </div>

      <div className="md:flex justify-evenly items-center p-8">
        <p className="max-w-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, in. Assumenda, iste mollitia, quas error nulla cum alias voluptas quia ullam quis, harum non! Dolorem veniam fuga ipsa. Quos odio aperiam ab nesciunt a quae voluptate, facilis vero mollitia suscipit ad tempora quod, temporibus inventore neque dolorum excepturi dignissimos doloremque!</p>
        <img src={aboutImg3} className="w-full md:w-1/3 transform transition duration-500 hover:scale-125" alt="" />
      </div>


    </div>
  );
}
