import React from 'react';

import { CodeIcon, CubeTransparentIcon } from '@heroicons/react/outline';

import Portrait from 'assets/portrait.jpg';
import { Element } from 'react-scroll';
import SectionHeading from '../../common/SectionHeading';

const features = [
  {
    name: 'Code',
    description: 'Python | JavaScript | TypeScript | C++ | HTML | CSS',
    icon: CodeIcon,
  },
  {
    name: 'Frameworks',
    description:
      'React | Node.js | Flask | PyTorch | PostgreSQL | NumPy | pandas',
    icon: CubeTransparentIcon,
  },
];

export default function About() {
  return (
    <Element id="about" name="about">

      <div className="h-full mb-48 md:mt-24">
        <div className="flex flex-row">
          <div className="max-w-3xl md:mx-auto mx-10">
            <div className="md:text-left md:align-center text-center">
              <SectionHeading heading="About Me" color="text-primary-dark" />
              <p className="mt-4 max-w-2xl md:text-xl text-md text-surface text-opacity-87">
                I am a second-year student at Massachusetts Institute of
                Technology studying Computer Science and Engineering. I have
                experience building full-stack applications using Node.js and
                React. Additionally, I have experience with machine learning and
                data science using Python, PyTorch, and SciKit Learn.
              </p>
            </div>

            <div className="mt-10">
              <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-1 md:gap-x-8 md:gap-y-10">
                {features.map(feature => (
                  <div key={feature.name} className="relative">
                    <dt>
                      <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-primary text-black">
                        <feature.icon className="h-6 w-6" aria-hidden="true" />
                      </div>
                      <p className="ml-16 text-lg leading-6 font-medium text-surface">
                        {feature.name}
                      </p>
                    </dt>
                    <dd className="mt-1 ml-16 text-base text-surface text-opacity-87">
                      {feature.description}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <div className="lg:visible hidden lg:w-1/5 lg:mx-auto lg:flex flex-col lg:justify-center items-center">
            <div className="w-100 h-auto border-4 border-solid border-primary rounded-xl">
              <img
                className="w-100 h-auto rounded-xl -translate-x-3 -translate-y-3 grayscale hover:grayscale-0 hover:-translate-x-5 hover:-translate-y-5 transition-all duration-300"
                src={Portrait}
                alt="portrait"
              />
            </div>
          </div>
        </div>
      </div>
    </Element>
  );
}
