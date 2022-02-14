import React from 'react';

import Portrait from 'assets/portrait.jpg';

import './styles.scss';

export default function About() {
  return (
    <section id="about">
      <div className="about-container">
        <h1>About</h1>
        <div className="about-content">
          <p>
            I am a second-year student at Massachusetts Institute of Technology
            studying Computer Science and Engineering. I have experience building full-stack
            applications using Node.js and React. Additionally, I have experience with
            machine learning and data science using Python, PyTorch, and SciKit Learn.
          </p>
          <div className="image-wrapper">
            <div className="image-container">
              <img src={Portrait} alt="portrait" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
