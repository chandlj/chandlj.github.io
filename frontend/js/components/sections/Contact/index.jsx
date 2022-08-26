import React from 'react';
import { IconContext } from 'react-icons';
import { AiOutlineGithub, AiFillLinkedin } from 'react-icons/ai';
import { HiOutlineMail } from 'react-icons/hi';
import { Element } from 'react-scroll';

export default function Contact() {
  return (
    <Element id="contact" name="contact">
      <div className="w-full h-48 pb-28 pt-12 flex flex-row justify-center bg-surface">
        <div className="w-3/5 flex flex-col items-center">
          <h1 className="text-4xl text-semibold text-white">Contact Me</h1>
          <IconContext.Provider value={{ size: '50' }}>
            <ul className="list-none p-0 m-0 mt-5 flex flex-row justify-between space-x-8">
              <li>
                <a href="mailto:jchand@mit.edu">
                  <HiOutlineMail className="text-primary" />
                </a>
              </li>
              <li>
                <a href="https://github.com/chandlj">
                  <AiOutlineGithub className="text-primary" />
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/joseph-a-chandler/">
                  <AiFillLinkedin className="text-primary" />
                </a>
              </li>
            </ul>
          </IconContext.Provider>
        </div>
      </div>
    </Element>
  );
}
