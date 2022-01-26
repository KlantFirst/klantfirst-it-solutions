import { useRouter } from "next/router";
import { AppConfig } from "../../utils/AppConfig";

export const Footer = () => {
  const router = useRouter();

  return (
    <div className="relative grid grid-rows-1 text-black pt-44">
      <div className="grid absolute w-screen bottom-0 grid-flow-col items-end -z-10">
        <div className="2xl:w-4/5">
          <svg
            viewBox="0 0 410 500"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M265.884 606.138C429.792 606.138 531 342.507 531 254.521C531 166.536 511.748 0 347.84 0C243.589 0 94.625 54.4047 0 116.646V650C86.442 650.098 195.021 606.138 265.884 606.138Z"
              fill="#0e7490"
            />
          </svg>
        </div>
        <div className="xl:w-4/5 justify-self-end">
          <svg
            viewBox="0 0 320 330"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M440 0.790039C275.369 20.4706 45.4972 139.945 45.4972 220.471C1.85625 376.381 -7.57941 478.085 5.34623 543H440V0.790039Z"
              fill="#0e7490"
            />
          </svg>
        </div>
      </div>
      <div className="grid row-span-1 w-full h-full gap-10 2xl:gap-16 border-box p-10 2xl:p-16">
        <div
          id="colorful-parent"
          className="grid grid-cols-2 items-center w-full h-5v 2xl:px-72 bg-gray-100 bg-opacity-50 backdrop-filter backdrop-blur-md 2xl:backdrop-blur-2xl rounded-xl hover:bg-gradient-to-r from-gray-100 to-cyan-800 transition duration-1000 ease-in-out"
        >
          <div
            id="colorful"
            className="absolute w-full h-full rounded-xl opacity-0"
          />
          <div className="z-10 px-5">
            <h2 className="text-5xl font-medium mb-8">Still can not decide?</h2>
            <p className="text-2xl">
              Let our sales talk to you and find the right choice for your case
            </p>
          </div>
          <button
            className="text-lg mr-2 justify-self-end bg-black h-20 w-60 text-white rounded-xl shadow-lg z-10 transition duration-300 ease-in-out hover:shadow-2xl hover:bg-gray-800 active:shadow-md active:bg-gray-800"
            type="button"
            onClick={() => router.push("/contact")}
          >
            Contact us
          </button>
        </div>
        <div className="grid grid-rows-auto items-center justify-items-center w-full h-4v 2xl:px-72 2xl:py-20 bg-gray-100 bg-opacity-50 backdrop-filter backdrop-blur-md 2xl:backdrop-blur-2xl rounded-xl hover:bg-gradient-to-r from-gray-100 to-cyan-800 transition duration-1000 ease-in-out">
          <h1 className="text-2xl font-medium">KlantFirst IT Solutions</h1>
          <div className="grid grid-flow-col gap-4">
            <div className="w-16 h-16 grid bg-black rounded-md justify-items-center items-center transition duration-300 ease-in-out hover:shadow-2xl hover:bg-gray-800 active:shadow-md active:bg-gray-800">
              <a className="w-10 h-10" href="">
                <svg
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#FFF"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
            <div className="w-16 h-16 grid bg-black rounded-md justify-items-center items-center transition duration-300 ease-in-out hover:shadow-2xl hover:bg-gray-800 active:shadow-md active:bg-gray-800">
              <a className="w-10 h-10" href="mailto: klantfirst@gmail.com">
                <svg
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="#FFF"
                >
                  <path d="M11.585 5.267c1.834 0 3.558.811 4.824 2.08v.004c0-.609.41-1.068.979-1.068h.145c.891 0 1.073.842 1.073 1.109l.005 9.475c-.063.621.64.941 1.029.543 1.521-1.564 3.342-8.038-.946-11.79-3.996-3.497-9.357-2.921-12.209-.955-3.031 2.091-4.971 6.718-3.086 11.064 2.054 4.74 7.931 6.152 11.424 4.744 1.769-.715 2.586 1.676.749 2.457-2.776 1.184-10.502 1.064-14.11-5.188C-.977 13.521-.847 6.093 5.62 2.245 10.567-.698 17.09.117 21.022 4.224c4.111 4.294 3.872 12.334-.139 15.461-1.816 1.42-4.516.037-4.498-2.031l-.019-.678c-1.265 1.256-2.948 1.988-4.782 1.988-3.625 0-6.813-3.189-6.813-6.812 0-3.659 3.189-6.885 6.814-6.885zm4.561 6.623c-.137-2.653-2.106-4.249-4.484-4.249h-.09c-2.745 0-4.268 2.159-4.268 4.61 0 2.747 1.842 4.481 4.256 4.481 2.693 0 4.464-1.973 4.592-4.306l-.006-.536z" />
                </svg>
              </a>
            </div>
          </div>
          <h3>
            © Copyright {new Date().getFullYear()} {AppConfig.title}
          </h3>
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
