import React from 'react';
import { Element } from 'react-scroll';
import SectionHeading from 'js/components/common/SectionHeading';
import WorkCard from './WorkCard';

const work = [
  {
    title: 'MIT Undergraduate Researcher',
    duration: 'September 2021 - December 2021',
    description: `Researched applications of dynamic graph neural networks (DGNNs) for predicting traffic flow, traffic collisions and recommendation.
      Designed and implementing new temporal and spatial network architectures based off previous research to publish in the future.
      Constructed machine learning pipelines to train neural networks and compare test benchmarks between models on different datasets.`,
  },
  {
    title: 'Combined Curiosity',
    duration: 'June 2020 - August 2021',
    description: `Designed and built a full-stack app using React and JavaScript to assist marketers in handling incoming requests to landing pages.
      Developed several other microservices for ingesting and processing data that increased the engineering team’s efficiency by over 20%.
      Implemented an analytics solution for visualizing internal data stored in a data warehouse such as sales numbers and experiment performance that helped drive ad revenue by over $100,000 while also guiding company planning, initiatives, and future projects.`,
  },
  {
    title: 'Peerview Data',
    duration: 'June 2021 - August 2021',
    description:
      `Created a tool for ingesting financial data to power data visualization and increase productivity by automating the upload process.
      Redesigned the app’s data processing and storage flow which dramatically increased live app performance by over 85%.`,
  },
];

export default function Work() {
  return (
    <Element id="work" name="work">
      <div className="w-full flex flex-row justify-center relative">
        <div className="w-full h-full absolute top-0 bottom-0 left-0 right-0 bg-fixed bg-surface opacity-10 overflow-hidden" />
        <div className="w-3/5 my-24 z-10">
          <SectionHeading heading="Work" color="text-secondary-dark" />
          <ol className="m-0 p-0 list-none border-l-2 border-secondary">
            {work.map(job => (
              <WorkCard
                key={job.title}
                title={job.title}
                description={job.description}
                duration={job.duration}
              />
            ))}
          </ol>
        </div>
      </div>
    </Element>
  );
}
