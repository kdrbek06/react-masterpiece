import * as React from 'react';
import aboutImg from '../image/food3.png';
import aboutImg2 from '../image/food5.png';
import aboutImg3 from '../image/food2.jpg';

export interface IAppProps {
}

export default function App(props: IAppProps) {
  return (
    <div className="m-2 p-2 lg:m-16 text-center">
      <h2 className="modifiedH2" >About Us</h2>
      <p className="m-auto md:w-2/3 mb-8">In our journey that started with restaurant-quality home-cooked takeaway service in 2021, we opened 34 takeaway branches in Ghent in a short time and reached the level of 1,500 online orders per day.

        In 7 months between, we tried to constantly improve ourselves and diversify our services. We have always advanced our food quality, product variety and technologies we use.

        In 2021, we launched our Packaged Corporate Hot Lunch Subscription service. With our corporate catering service, which does not require kitchen equipment and does not require a service person, we have started to offer gourmet dining experience to employees by reducing the catering costs of companies.</p>

      <div className="md:flex justify-evenly items-center p-8">
        <p className="max-w-xl">Kitchens and Cooks gives further intimation usual menu, stating confidently that "Boulanger served salted poultry and fresh eggs, all presented without a tablecloth on small marble tables". Numerous commentators have also referred to the supposed restaurant owner's eccentric habit of touting for custom outside his establishment, dressed in aristocratic fashion and brandishing a sword

          According to Miss Spang, there is not a shred of evidence for any of it. She said: These legends just get passed on by hearsay and then spiral out of control. Her interest in Boulanger dates back to a history of food seminar in Paris in the mid-1990s

        </p>
        <img src={aboutImg} className="w-full md:w-1/3 transform transition duration-500 hover:scale-110" alt="" />
      </div>

      <div className="md:flex justify-evenly items-center p-8">
        <img src={aboutImg2} className="w-full md:w-1/3 transform transition duration-500 hover:scale-110" alt="" />
        <p className="max-w-xl">
          The History of Kitchens and Cooks gives further intimation on Mr Boulanger usual menu, stating confidently that "Boulanger served salted poultry and fresh eggs, all presented without a tablecloth on small marble tables". Numerous commentators have also referred to the supposed restaurant owner's eccentric habit of touting for custom outside his establishment, dressed in aristocratic fashion and brandishing a sword

          According to Miss Spang, there is not a shred of evidence for any of it. She said: These legends just get passed on by hearsay and then spiral out of control. Her interest in Boulanger dates back to a history of food seminar in Paris in the mid-1990s</p>
      </div>

      <div className="md:flex justify-evenly items-center p-8">
        <p className="max-w-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, in. Assumenda, iste mollitia, quas error nulla cum alias voluptas quia ullam quis, harum non! Dolorem veniam fuga ipsa. Quos odio aperiam ab nesciunt a quae voluptate, facilis vero mollitia suscipit ad tempora quod, temporibus inventore neque dolorum excepturi dignissimos doloremque!</p>
        <img src={aboutImg3} className="w-full md:w-1/3 transform transition duration-500 hover:scale-110" alt="" />
      </div>


    </div>
  );
}
