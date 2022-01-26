import React from "react";

import { useRouter } from "next/router";

export const OurTeam = () => {
  const router = useRouter();
  return (
    <div id="team" className="max-w-screen-xl px-4 mx-auto md:px-8 text-black">
      <div className="mb-6 md:mb-6">
        <h1 className="text-2xl xl:text-5xl font-medium dark:text-white text-center mb-4">
          Our Team
        </h1>

        <p className="max-w-screen-md mx-auto text-center text-gray-500 md:text-lg">
          Meet our team of enthusiastic and passionate professionals carrying
          vast industry experience in the field of finance, insurance, supply
          chain to name a few.
        </p>
      </div>

      <div className="grid gap-4 md:grid-cols-3">
        <div className="p-4 shadow">
          <div className="h-48 mb-2 overflow-hidden rounded-lg shadow-lg md:h-80">
            <img
              src={`${router.basePath}/gouri.jpg`}
              alt="Image"
              className="object-cover object-center w-full h-full"
            />
          </div>

          <div className="flex flex-col items-center justify-center">
            <div className="font-bold text-indigo-500 md:text-lg">
              Gourishankar Bhutra
            </div>
            <p className="mb-3 text-sm text-gray-500 md:text-base md:mb-4">
              Founder / CEO
            </p>

            <div className="flex">
              <div className="flex gap-4">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.linkedin.com/in/gourishankar/"
                >
                  <svg
                    className="w-6 h-6 text-blue-500 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="p-4 shadow">
          <div className="h-48 mb-2 overflow-hidden rounded-lg shadow-lg md:h-80">
            <img
              src={`${router.basePath}/anu.jpg`}
              alt="Image"
              className="object-cover object-center w-full h-full"
            />
          </div>

          <div className="flex flex-col items-center justify-center">
            <div className="font-bold text-indigo-500 md:text-lg">Anu</div>
            <p className="mb-3 text-sm text-gray-500 md:text-base md:mb-4">
              Web Developer
            </p>

            <div className="flex">
              <div className="flex gap-4">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.linkedin.com/in/anu-malik-70927222/"
                >
                  <svg
                    className="w-6 h-6 text-blue-500 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="p-4 shadow">
          <div className="h-48 mb-2 overflow-hidden rounded-lg shadow-lg md:h-80">
            <img
              src="nikhil.jpg"
              alt="Image"
              className="object-cover object-center w-full h-full"
            />
          </div>

          <div className="flex flex-col items-center justify-center">
            <div className="font-bold text-indigo-500 md:text-lg">
              Nikhil Suri
            </div>
            <p className="mb-3 text-sm text-gray-500 md:text-base md:mb-4">
              Web Developer
            </p>

            <div className="flex">
              <div className="flex gap-4">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.linkedin.com/in/nikhil-suri/"
                >
                  <svg
                    className="w-6 h-6 text-blue-500 fill-current"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
