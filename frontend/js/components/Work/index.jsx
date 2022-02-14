import React, { useState } from 'react';

import './styles.scss';

const workSections = ['Job 1', 'Job 2', 'Job 3'];

const workDescriptions = [
  'Huge description here. talk about job shit and make this really long',
  'Descp2',
  'Descp3',
];

export default function Work() {
  const [jobState, setJobState] = useState(0);

  return (
    <section id="work">
      <div className="work-container">
        <h1>Work</h1>
        <div className="work-content">
          <div className="job-button-container">
            {workSections.map((section, i) => (
              <button
                type="submit"
                key={section}
                id={i}
                onClick={() => setJobState(i)}
              >
                {section}
              </button>
            ))}
          </div>
          <div className="job-description-container">
            <p>
              {workDescriptions[jobState]}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
