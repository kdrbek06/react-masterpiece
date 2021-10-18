import * as React from 'react';
import { IconContext } from 'react-icons';
import { SiLinkedin } from "react-icons/si";
import { SiGoogle } from "react-icons/si";
import { SiFacebook } from "react-icons/si";
import { SiInstagram } from "react-icons/si";




export interface IAppProps {

}

export default function App(props: IAppProps) {
  return (
    <div>

      <footer className="flex bg-gray-600 p-10">

        <div className="footerLogo flex flex-1 flex-col px-2">
          <img className="py-2" src="" alt="LOGO" />
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam suscipit pariatur voluptatem quia harum asperiores sit perspiciatis, voluptas natus quo.</p>
        </div>



        <div className="footerLinks flex flex-1 flex-col px-2">
          <h4 className="py-2">Usefull Links</h4>
          <ul>
            <li><a href="" className="hover:text-white">Homepage</a></li>
          </ul>
        </div>



        <div className="footerSocial flex flex-1 flex-col px-2">
          <h4 className="py-2">Social Media</h4>

          <IconContext.Provider value={{ className: "react-icons", size: '1.5rem', style: { verticalAlign: 'middle' } }}>

            <a className="flex my-2 hover:text-white" href="" target="_blank"><SiGoogle />Google</a>
            <a className="flex my-2 hover:text-white" href="" target="_blank"><SiFacebook />Facebook</a>
            <a className="flex my-2 hover:text-white" href="" target="_blank"><SiInstagram />Instagram</a>
            <a className="flex my-2 hover:text-white" href="" target="_blank"><SiLinkedin />Linkedin</a>

          </IconContext.Provider>

        </div>


        <div className="footerSubscribe flex flex-1 flex-col px-2"></div>
      </footer>

    </div>
  );
}
