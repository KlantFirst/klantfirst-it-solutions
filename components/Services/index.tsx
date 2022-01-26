import * as React from "react";

import { useRouter } from "next/router";
import { SoftwareEngineer } from "../SVG/SoftwareEngineer";
import { DeveloperActivity } from "../SVG/DeveloperActivity";
import { Teaching } from "../SVG/Teaching";

export const Services = () => {
  const router = useRouter();

  return (
    <div id="services">
      <div className="w-screen grid gap-32 justify-items-center items-center text-black py-10">
        <h1 className="text-2xl xl:text-5xl font-medium dark:text-white">
          Take a look at our services
        </h1>

        <div className="relative w-full h-5v border-box px-60 grid grid-flow-col grid-cols-1">
          <div className="w-full h-full grid grid-flow-col grid-cols-2">
            <div className="relative">
              <div className="absolute h-full w-full">
                <DeveloperActivity />
              </div>
            </div>
            <div className="grid justify-self-end justify-items-center items-center w-full h-5v 2xl:py-16 2xl:px-32 bg-gray-100 bg-opacity-50 backdrop-filter backdrop-blur-md 2xl:backdrop-blur-lg rounded-xl">
              <h2 className="text-2xl font-medium">Software development</h2>
              <p className="text-lg text-justify">
                If you need a website, mobile app or any other software, hit the
                button and find out the best option for you
              </p>
              <button
                type="button"
                onClick={() => router.push("/contact")}
                className="text-md bg-black h-16 w-60 text-white rounded-xl shadow-lg transition duration-300 ease-in-out hover:shadow-2xl active:shadow-md active:bg-cyan-800 hover:bg-gradient-to-r from-cyan-500 to-cyan-800"
              >
                Choose your option
              </button>
            </div>
          </div>
        </div>
        <div className="relative w-full h-5v border-box px-60 grid grid-flow-col grid-cols-1">
          <div className="w-full h-full grid grid-flow-col grid-cols-2 justify-center">
            <div className="grid justify-items-center items-center w-full h-5v 2xl:py-16 2xl:px-32 bg-gray-100 bg-opacity-50 backdrop-filter backdrop-blur-md 2xl:backdrop-blur-lg rounded-xl">
              <h2 className="text-2xl font-medium">IT hiring services</h2>
              <p className="text-lg text-justify">
                If you need services to hire right software engineers, hit the
                button and find out the best option for you
              </p>
              <button
                type="button"
                onClick={() => router.push("/contact")}
                className="text-md bg-black h-16 w-60 text-white rounded-xl shadow-lg transition duration-300 ease-in-out hover:shadow-2xl active:shadow-md active:bg-cyan-800 hover:bg-gradient-to-r from-cyan-500 to-cyan-800"
              >
                Launch it
              </button>
            </div>
            <div className="relative">
              <div className="absolute h-full w-full">
                <SoftwareEngineer />
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-full h-5v border-box px-60 grid grid-flow-col grid-cols-1">
          <div className="w-full h-full grid grid-flow-col grid-cols-2">
            <div className="relative">
              <div className="absolute h-full w-full">
                <Teaching />
              </div>
            </div>
            <div className="grid justify-self-end justify-items-center items-center w-full h-5v 2xl:py-16 2xl:px-32 bg-gray-100 bg-opacity-50 backdrop-filter backdrop-blur-md 2xl:backdrop-blur-lg rounded-xl">
              <h2 className="text-2xl font-medium">
                Training software engineers
              </h2>
              <p className="text-lg text-justify">
                If you need technology trainings in your organisation, hit the
                button and find out the best option for you
              </p>
              <button
                type="button"
                onClick={() => router.push("/contact")}
                className="text-md bg-black h-16 w-60 text-white rounded-xl shadow-lg transition duration-300 ease-in-out hover:shadow-2xl active:shadow-md active:bg-cyan-800 hover:bg-gradient-to-r from-cyan-500 to-cyan-800"
              >
                Choose your option
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
