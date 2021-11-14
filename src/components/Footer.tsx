import React, { useState, useEffect } from 'react';
import { IconContext } from 'react-icons';
import { SiLinkedin } from "react-icons/si";
import { SiGoogle } from "react-icons/si";
import { SiFacebook } from "react-icons/si";
import { SiInstagram } from "react-icons/si";
import rmLogoWhite from "../image/rmLogo.jpg"

interface ISize {
  width: number;
}

const socialMedia = [
  {
    "icon": < SiGoogle />,
    "text": "Google",
    "link": "https://www.google.com"
  },
  {
    "icon": < SiFacebook />,
    "text": "Facebook",
    "link": "https://www.facebook.com"

  },
  {
    "icon": < SiInstagram />,
    "text": "Instagram",
    "link": "https://www.instagram.com"

  },
  {
    "icon": < SiLinkedin />,
    "text": "Linkedin",
    "link": "https://www.linkedin.com"
  }];

export default function Size() {

  const [size, setSize] = useState<ISize>();

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
    <footer className="flex flex-col bg-black opacity-90 text-darkkhaki p-10 md:flex-row">

      <div className="flex flex-1 flex-col px-2 items-center">
        <img className="" src={rmLogoWhite} alt="footer-logo" width="150px">
        </img>
        <p className="text-center md:text-left my-5"> Real Meal 2021, All Rights Reserved ©</p>
      </div>

      <div className="footerLinks flex flex-1 flex-col px-2 items-center">
        <h4 className="py-4">USEFUL LINKS</h4>
        <ul>
          <li><a href="/" className="hover:text-white">Homepage</a></li>
          <li><a href="#about" className="hover:text-white">About Us</a></li>
        </ul>
      </div>

      <div className="footerSubscribe flex flex-1 flex-col px-2">
        <h4 className="py-4 text-center">EMAIL NEWSLETTER</h4>
        <p>Subscribe to our e-newsletter to receive promo's and new offers !</p>
        <input className="my-2 px-2 rounded-lg" type="email" />
        <input className="my-2 rounded-lg hover:bg-darkkhaki hover:text-white" type="submit" value="SUBSCRIBE" />
      </div>

      <div className="footerSocial flex-1 px-2" id="contacts">
        <h4 className="py-4 text-center justify-items-center">SOCIAL MEDIA</h4>
        <div className="flex md:flex-col">
          <IconContext.Provider value={{ className: "react-icons", size: '2rem', style: { verticalAlign: 'middle' } }}>
            {socialMedia.map((item, index) => <a key={index + ""} className="flex m-2 hover:text-white md:ml-12 xl:ml-24" href={item.link}> {item.icon} {!size || size.width >= 768 ? <span className="">{item.text}</span> : ""}</a>)}
          </IconContext.Provider>
        </div>
      </div>

    </footer>
  );
}
