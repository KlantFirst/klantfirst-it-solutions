import * as React from "react";

import { useRouter } from "next/router";

export const Intro = () => {
  const router = useRouter();

  return (
    <div className="w-screen grid justify-items-center items-center text-black pt-10">
      <div className="grid absolute h-15v w-screen top-0 grid-rows-3">
        <div className="2xl:w-3/5">
          <svg
            viewBox="0 0 780 530"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M341.902 281.818C561.719 281.818 773 160.54 773 17.0986C773 10.7405 772.525 6.03868 771 0H0V525.773C222.482 517.433 146.449 281.818 341.902 281.818Z"
              fill="#0e7490"
            />
          </svg>
        </div>
        <div className="2xl:w-1/2">
          <svg
            viewBox="0 0 380 180"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M54.0237 222.47C-151.667 841.334 282.574 606.138 477.199 606.138C595.342 606.138 686.052 508.994 739.1 412.964V69C706.875 28.9084 655.603 0 574.515 0C379.889 0 54.0237 134.485 54.0237 222.47Z"
              fill="#0e7490"
            />
          </svg>
        </div>
      </div>
      <div className="grid w-full h-full gap-10 2xl:gap-16 border-box p-12 2xl:p-16">
        <div className="grid grid-flow-col items-center w-full h-8v 2xl:px-72 bg-gray-100 bg-opacity-50 backdrop-filter backdrop-blur-md 2xl:backdrop-blur-2xl rounded-xl">
          <div className="justify-self-start px-5">
            <h1 className="text-6xl font-semibold">KlantFirst IT Solutions</h1>
            <h2 className="text-2xl font-semibold">
              Customer satisfaction is our success!
            </h2>
          </div>
          <div className="2xl:w-96 justify-self-end"></div>
        </div>
        <div
          id="colorful-parent"
          className="relative hover:bg-gradient-to-r from-gray-100 to-cyan-800 transition duration-1000 ease-in-out grid grid-cols-2 items-center justify-self-end w-4/5 h-5v 2xl:px-72 bg-gray-100 bg-opacity-50 backdrop-filter backdrop-blur-md 2xl:backdrop-blur-2xl rounded-xl"
        >
          <div
            id="colorful"
            className="absolute w-full h-full rounded-xl opacity-50"
          />
          <div id="colorful-text" className="z-10 px-5">
            <h2 className="text-5xl font-medium mb-8">Free project estimate</h2>
            <p className="text-2xl">
              Don’t waste your time, let’s get started right now. Send us your
              project in several clicks and our sales will get back to you in 24
              hours
            </p>
          </div>
          <button
            id="colorful-button"
            className="text-lg mr-2 justify-self-end bg-black h-20 w-60 text-white rounded-xl shadow-lg z-10 transition duration-300 ease-in-out hover:shadow-2xl hover:bg-gray-800 active:shadow-md active:bg-gray-800"
            type="button"
            onClick={() => router.push("/contact")}
          >
            Get it now
          </button>
        </div>
      </div>
      <style jsx>
        {`
          #colorful {
            pointer-events: none;
          }
          #colorful-parent:hover > #colorful {
            @apply opacity-50;
          }
        `}
      </style>
    </div>
  );
};
