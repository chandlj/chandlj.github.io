import React from 'react';

import Resume from 'assets/resume.pdf';

export default function Hero() {
  return (
    <div
      className="relative overflow-hidden h-screen bg-no-repeat bg-cover"
    >
      <div
        className="absolute top-0 left-0 right-0 bottom-0 bg-surface w-full md:h-full h-3/4 bg-fixed overflow-hidden opacity-5 scale-[90%]"
      />
      <div className="max-w-5xl mx-auto mt-48">
        <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32 bg-transparent">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl tracking-tight font-extrabold md:text-6xl text-black">
                <span className="block xl:inline font-semibold">
                  Joseph Chandler
                </span>
              </h1>
              <p className="mt-5 text-base text-black max-w-lg mx-auto md:mt-5 md:text-xl lg:mx-0 text-opacity-87">
                Software Engineer, Data Scientist, and Student at Massachusetts
                Institute of Technology
              </p>
              <div className="mt-5 flex justify-center lg:justify-start">
                <div className="rounded-md shadow w-min">
                  <form action={Resume} target="_blank">
                    <button
                      type="submit"
                      className="
                      flex items-center justify-center px-8 py-3
                      border border-transparent text-base font-medium rounded-md
                      text-black bg-primary md:py-4 md:text-xl md:px-10
                      hover:scale-105 transition-all hover:cursor-pointer
                      hover:bg-primary-dark
                    "
                    >
                      {' '}
                      Resume
                      {' '}
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
