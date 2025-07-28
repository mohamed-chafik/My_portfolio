import React, { useEffect, useRef } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin} from "@fortawesome/free-brands-svg-icons";
import Button from './resume.jsx'
function Header() {
    return (
        <section className=' w-full h-[100vh] flex justify-center items-center  bg-center z-0 inline-grid' id='head'>
          <div class='self-right self-baseline text-white pointer mr-[11px] pt-[11px]'>
            <ul class='flex justify-end'>
              <li class='w-fit mr-[20px] cursor-pointer'><a href="https://github.com/mohamed-chafik"><FontAwesomeIcon icon={faGithub} size="2xl" className='w-[25px]'/></a></li>
              <li class='w-fit mr-[20px] cursor-pointer'><a href="https://www.linkedin.com/in/mohamed-chafik-809206345/"><FontAwesomeIcon icon={faLinkedin} size="2xl" className='w-[25px]'/></a></li>
            </ul>
          </div>
            <div className="w-fit h-fit flex flex-col items-center justify-center bg-draw z-3 self-baseline" >
                <h1 className='font-rock text-8xl text-white '>Mohamed Chafik</h1>
                <p className='w-fit mt-[30px] font-fira text-white'>Front-End Developer | Minimal Code, Maximal Impact</p>
                <ul class='flex'>

                  <li ><Button ></Button></li>
 
                </ul>
            </div>
        </section>
    );
}

export default Header;
