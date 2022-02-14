import React from 'react';
import ComputerPhoto from 'assets/computer_photo.jpg';
import './index.scss';

const HEADER_SECTIONS = ['About', 'Work', 'Contact'];

export default function Test() {
  return (
    <div>
      <div className="header">
        <h1 className="siteTitle">Home</h1>
        <div>
          <ul className="headerList">
            {HEADER_SECTIONS.map((section) => (
              <li key={section} className="headerItem">
                {section}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="backgroundContainer">
        <div className="background" style={{ backgroundImage: `url(${ComputerPhoto})` }}>
          <h1 className="titleName">
            Joseph Chandler
          </h1>
          <h3 className="subTitle">
            Software Engineer | Data Scientist
          </h3>
        </div>
      </div>
    </div>
  );
}
