import React from 'react';
import PropTypes from 'prop-types';

export default function WorkCard({ title, duration, description }) {
  return (
    <li>
      <div className="md:flex flex-start">
        <div className="bg-secondary-dark w-4 h-4 flex items-center justify-center rounded-full -ml-2" />
        <div className="block p-6 rounded-lg shadow-lg bg-white w-full ml-6 mb-10 border border-solid border-surface border-opacity-20">
          <div className="flex flex-col justify-between mb-4">
            <a className="font-semibold text-secondary hover:text-secondary-dark duration-300 transition ease-in-out text-xl">
              {title}
            </a>
            <a className="font-medium text-black text-opacity-60 text-sm">
              {duration}
            </a>
          </div>
          <ul className="list-disc list-outside -ml-6">
            {description.split('\n').map(sentence => (
              <li className="text-black text-opacity-87">
                <p className="mb-6">{sentence}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </li>
  );
}

WorkCard.propTypes = {
  title: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
