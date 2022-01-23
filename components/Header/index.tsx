import { ReactNode, useEffect } from "react";

import { useRouter } from "next/router";

export const Header = () => {
  const router = useRouter();
  console.log(router.pathname);
  useEffect(() => {
    let scrollpos = window.scrollY;
    let header = document.getElementById("header");
    let navcontent = document.getElementById("nav-content");
    let navaction = document.querySelectorAll(".navAction");
    let toToggle = document.querySelectorAll(".toggleColour");

    if (router.pathname === "/") {
      document.addEventListener("scroll", function () {
        console.log(scrollpos);
        /*Apply classes for slide in bar*/
        scrollpos = window.scrollY;
        if (scrollpos > 10) {
          header?.classList.add("bg-white");
          for (let i = 0; i < navaction.length; i++) {
            navaction[i]?.classList.remove("text-white");
            navaction[i]?.classList.add("text-gray-800");
          }

          //Use to switch toggleColour colours
          for (let i = 0; i < toToggle.length; i++) {
            toToggle[i].classList.add("text-gray-800");
            toToggle[i].classList.remove("text-white");
          }
          header?.classList.add("shadow");
          navcontent?.classList.remove("bg-gray-100");
          navcontent?.classList.add("bg-white");
        } else {
          header?.classList.remove("bg-white");
          for (let i = 0; i < navaction.length; i++) {
            navaction[i]?.classList.remove("text-white");
            navaction[i]?.classList.add("text-gray-800");
          }

          //Use to switch toggleColour colours
          for (var i = 0; i < toToggle.length; i++) {
            toToggle[i].classList.add("text-white");
            toToggle[i].classList.remove("text-gray-800");
          }

          header?.classList.remove("shadow");
          navcontent?.classList.remove("bg-white");
          navcontent?.classList.add("bg-gray-100");
        }
      });
    } else {
      header?.classList.add("bg-[#0e7490]");
      header?.classList.add("shadow");
    }
  }, []);

  return (
    <nav id="header" className="fixed w-full z-30 top-0 text-white">
      <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
        <div className="pl-4 flex items-center">
          <button
            className="toggleColour no-underline hover:no-underline font-bold text-2xl lg:text-4xl text-white"
            onClick={() => router.push("/")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="inline-block h-6 w-6 stroke-wi"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                className="stroke-2"
                d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
              />
            </svg>
            <span className="pl-2">KlantFirst</span>
          </button>
        </div>

        <div className="block lg:hidden pr-4">
          <button
            id="nav-toggle"
            className="flex items-center px-3 py-2 border rounded text-gray-500 border-gray-600 hover:text-gray-800 hover:border-teal-500 appearance-none focus:outline-none"
          >
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
            </svg>
          </button>
        </div>

        <div
          className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden mt-2 lg:mt-0 lg:bg-transparent text-black p-4 lg:p-0 z-20 bg-gray-100"
          id="nav-content"
        >
          <ul className="list-reset lg:flex justify-end flex-1 items-center">
            <li className="mr-3">
              <button
                onClick={() => router.push("/contact")}
                className="navAction hover:bg-gradient-to-r from-cyan-200 to-cyan-500 transition duration-1000 ease-in-out mx-auto lg:mx-0 text-black font-bold rounded-3xl mt-4 lg:mt-0 py-3 px-6 shadow opacity-75 bg-white"
              >
                Our Services
              </button>
            </li>
            <li className="mr-3">
              <button
                onClick={() => router.push("/contact")}
                className="navAction hover:bg-gradient-to-r from-cyan-200 to-cyan-500 transition duration-1000 ease-in-out mx-auto lg:mx-0 text-black font-bold rounded-3xl mt-4 lg:mt-0 py-3 px-6 shadow opacity-75 bg-white"
              >
                Our Team
              </button>
            </li>
            <li className="mr-3">
              <button
                onClick={() => router.push("/contact")}
                className="navAction hover:bg-gradient-to-r from-cyan-200 to-cyan-500 transition duration-1000 ease-in-out mx-auto lg:mx-0 text-black font-bold rounded-3xl mt-4 lg:mt-0 py-3 px-6 shadow opacity-75 bg-white"
              >
                Contact Us
              </button>
            </li>
          </ul>
        </div>
      </div>

      <hr className="border-b border-gray-100 opacity-25 my-0 py-0" />
    </nav>
  );
};
