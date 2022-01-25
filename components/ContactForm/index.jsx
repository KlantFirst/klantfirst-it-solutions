import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_jejdmyn",
        "template_7l9bwvt",
        form.current,
        "user_MsyYMl7RaEbcbMn6B0Ijz"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <>
      <div className="flex justify-center flex-col items-center h-screen mx-auto bg-gray-100">
        <p className="text-4xl font-bold text-center text-black mt-2">
          Contact us
        </p>
        <div className="pt-4">
          <form ref={form} onSubmit={sendEmail}>
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <input
                  className="block appearance-none placeholder-gray-500 placeholder-opacity-100 border border-cyan-700 rounded-md w-full py-3 px-4 text-gray-700 leading-5 focus:outline-none focus:ring-2 focus:ring-light-blue-300"
                  id="from_name"
                  name="from_name"
                  placeholder="Name"
                />
              </div>
              <div className="w-full md:w-1/2 px-3">
                <input
                  className="block appearance-none placeholder-gray-500 placeholder-opacity-100 border border-cyan-700 rounded-md w-full py-3 px-4 text-gray-700 leading-5 focus:outline-none focus:ring-2 focus:ring-light-blue-300"
                  id="from_email"
                  name="from_email"
                  placeholder="Email"
                  type="email"
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-2">
              <div className="w-full px-3">
                <input
                  type="textarea"
                  className="resize-none block appearance-none placeholder-gray-500 placeholder-opacity-100 border border-cyan-700 rounded-md w-full py-3 px-4 text-gray-700 leading-5 focus:outline-none focus:ring-2 focus:ring-light-blue-300 h-56"
                  id="message"
                  placeholder="Comments.."
                  name="message"
                />
              </div>
            </div>
            <div className="md:flex md:items-center p-3 pt-4">
              <div className="md:w-1/3"></div>
              <div className="md:w-2/3">
                <button
                  onClick={() => router.push("/")}
                  className="shadow bg-black focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded active:bg-cyan-800 hover:bg-gradient-to-r from-cyan-500 to-cyan-800"
                  type="button"
                >
                  Back
                </button>
                <button
                  className="shadow ml-5 bg-black  focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded active:bg-cyan-800 hover:bg-gradient-to-r from-cyan-500 to-cyan-800"
                  type="submit"
                >
                  Send
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};
