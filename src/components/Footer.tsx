import React, { useState, useEffect } from 'react';
import { IconContext } from 'react-icons';
import { SiLinkedin } from "react-icons/si";
import { SiGoogle } from "react-icons/si";
import { SiFacebook } from "react-icons/si";
import { SiInstagram } from "react-icons/si";
import Logo2 from '../image/logo2.png'



interface Size {
  width: number;
}


const socialMedia = [
  {
    "icon": < SiGoogle />,
    "text": "Google"
  },
  {
    "icon": < SiFacebook />,
    "text": "Facebook"
  },
  {
    "icon": < SiInstagram />,
    "text": "Instagram"
  },
  {
    "icon": < SiLinkedin />,
    "text": "Linkedin"
  }];

export default function Size() {


  const [size, setSize] = useState<Size>();


  const resizeHandler = () => {
    const width = window.innerWidth;

    setSize({
      width: width,
    });
  }


  useEffect(() => {
    window.onresize = resizeHandler
  });







  return (
      <footer className="flex flex-col bg-gray-400 p-10 md:flex-row">

        <div className="footerLogo flex flex-1 flex-col px-2 items-center">
          <img className="py-4" src={Logo2} width="125px" alt="LOGO" />
          <p className="text-center md:text-left">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam suscipit pariatur voluptatem quia harum asperiores sit perspiciatis, voluptas natus quo.</p>
        </div>



        <div className="footerLinks flex flex-1 flex-col px-2 items-center">
          <h4 className="py-4">USEFULL LINKS</h4>
          <ul>
            <li><a href="https://google.com" className="hover:text-white">Homepage</a></li>
          </ul>
        </div>


        <div className="footerSubscribe flex flex-1 flex-col px-2">
          <h4 className="py-4 text-center">EMAIL NEWSLETTER</h4>
          <p>Lorem ipsum dolor sit amet.</p>
          <input className="my-2 rounded-lg" type="email" />
          <input className="my-2 rounded-lg" type="submit" value="SUBSCRIBE" />
        </div>



        <div className="footerSocial flex-1 px-2 mx-auto" id="contacts">
          <h4 className="py-4 text-center">SOCIAL MEDIA</h4>
          <div className="flex md:flex-col">
            <IconContext.Provider value={{ className: "react-icons", size: '2rem', style: { verticalAlign: 'middle' } }}>
              {socialMedia.map((item, index) => <a key={index + ""} className="flex m-2 hover:text-white" href="https://google.com"> {item.icon} {!size || size.width >= 768
                ? <span className="md:">{item.text}</span> : ""}</a>)}
            </IconContext.Provider>
          </div>
        </div>

      </footer>
  );
}
