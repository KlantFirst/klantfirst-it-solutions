import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";

import { useRouter } from "next/router";

export const ContactUs = () => {
  const router = useRouter();
  const [successNotification, setSuccessNotification] = useState(false);
  const [failureNotification, setFailureNotification] = useState(false);
  const [valid, setValid] = useState(true);
  const captcha = useRef("");

  const generate = () => {
    const alphabets = "AaBbCcDdEeFfGgHhIiJjKkLlMmNnOoPpQqRrSsTtUuVvWwXxYyZz";
    const first = alphabets[Math.floor(Math.random() * alphabets.length)];
    const second = Math.floor(Math.random() * 10);
    const third = Math.floor(Math.random() * 10);
    const fourth = alphabets[Math.floor(Math.random() * alphabets.length)];
    const fifth = alphabets[Math.floor(Math.random() * alphabets.length)];
    const sixth = Math.floor(Math.random() * 10);
    captcha.current =
      first.toString() +
      second.toString() +
      third.toString() +
      fourth.toString() +
      fifth.toString() +
      sixth.toString();

    document.getElementById("generated-captcha").value = captcha.current;
    document.getElementById("entered-captcha").value = "";
  };

  useEffect(generate, []);

  const check = () => {
    const userValue = document.getElementById("entered-captcha").value;
    if (userValue === captcha.current) {
      setValid(true);
      return true;
    } else {
      setValid(false);
      return false;
    }
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    if (check()) {
      emailjs
        .sendForm(
          "service_jejdmyn",
          "template_7l9bwvt",
          form.current,
          "user_MsyYMl7RaEbcbMn6B0Ijz"
        )
        .then(
          (result) => {
            setSuccessNotification(true);
            form.current.reset();
            console.log(result.text);
          },
          (error) => {
            setFailureNotification(true);
            console.log(error.text);
          }
        );
    }
  };

  return (
    <>
      <div className="flex justify-center flex-col items-center h-screen mx-auto my-8 bg-gray-100">
        <p className="text-4xl font-bold text-center text-black mt-20 lg:my-4">
          Contact us
        </p>
        <div className="pt-2 px-2">
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
            <div className="my-6">
              <input
                type="tel"
                className="block appearance-none placeholder-gray-500 placeholder-opacity-100 border border-cyan-700 rounded-md w-full py-3 px-4 text-gray-700 leading-5 focus:outline-none focus:ring-2 focus:ring-light-blue-300"
                id="from_contact_number"
                name="from_contact_number"
                placeholder="Phone number"
              />
            </div>
            <div className="flex flex-wrap -mx-3 mb-2">
              <div className="w-full px-3">
                <textarea
                  className="resize-none block appearance-none placeholder-gray-500 placeholder-opacity-100 border border-cyan-700 rounded-md w-full py-3 px-4 text-gray-700 leading-5 focus:outline-none focus:ring-2 focus:ring-light-blue-300 h-48"
                  id="message"
                  placeholder="Type your message here.."
                  name="message"
                />
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-2 items-center">
              <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <input
                  type="text"
                  className="block appearance-none placeholder-gray-500 placeholder-opacity-100 border border-cyan-700 rounded-md w-full py-3 px-4 text-gray-700 leading-5 focus:outline-none focus:ring-2 focus:ring-light-blue-300"
                  id="entered-captcha"
                  name="entered-captcha"
                  placeholder="Enter the text shown.."
                />
              </div>
              <div className="w-full md:w-1/2 px-4 lg:px-2">
                <input
                  type="text"
                  className="font-bold text-xl text-gray-700"
                  readOnly
                  id="generated-captcha"
                  name="generated-captcha"
                ></input>
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
      {successNotification && (
        <div className="flex fixed bottom-0 right-0 flex-col justify-center">
          <div
            className="bg-green-600 shadow-lg mx-auto w-96 max-w-full text-sm pointer-events-auto bg-clip-padding rounded-lg block mb-3"
            id="static-example"
            role="alert"
            aria-live="assertive"
            aria-atomic="true"
            data-mdb-autohide="false"
          >
            <div className="bg-green-600 flex justify-between items-center py-2 px-3 bg-clip-padding border-b green-blue-500 rounded-t-lg">
              <p className="font-bold text-white flex items-center">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="info-circle"
                  className="w-4 h-4 mr-2 fill-current"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"
                  ></path>
                </svg>
                Thank you!
              </p>
              <div className="flex items-center">
                <button
                  type="button"
                  onClick={() => setSuccessNotification(false)}
                  className="btn-close btn-close-white box-content w-4 h-4 ml-2 text-white border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-white hover:opacity-75 hover:no-underline"
                  data-mdb-dismiss="toast"
                  aria-label="Close"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="p-3 bg-green-600 rounded-b-lg break-words text-white">
              Message Successfully sent.
            </div>
          </div>
        </div>
      )}
      {failureNotification && (
        <div className="flex fixed bottom-0 right-0 flex-col justify-center">
          <div
            className="bg-red-600 shadow-lg mx-auto w-96 max-w-full text-sm pointer-events-auto bg-clip-padding rounded-lg block mb-3"
            id="static-example"
            role="alert"
            aria-live="assertive"
            aria-atomic="true"
            data-mdb-autohide="false"
          >
            <div className="bg-red-600 flex justify-between items-center py-2 px-3 bg-clip-padding border-b green-blue-500 rounded-t-lg">
              <p className="font-bold text-white flex items-center">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="info-circle"
                  className="w-4 h-4 mr-2 fill-current"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"
                  ></path>
                </svg>
                Something went wrong!
              </p>
              <div className="flex items-center">
                <button
                  type="button"
                  onClick={() => setFailureNotification(false)}
                  className="btn-close btn-close-white box-content w-4 h-4 ml-2 text-white border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-white hover:opacity-75 hover:no-underline"
                  data-mdb-dismiss="toast"
                  aria-label="Close"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="p-3 bg-red-600 rounded-b-lg break-words text-white">
              Message sent failed.
            </div>
          </div>
        </div>
      )}
      {!valid && (
        <div className="flex fixed bottom-0 right-0 flex-col justify-center">
          <div
            className="bg-red-600 shadow-lg mx-auto w-96 max-w-full text-sm pointer-events-auto bg-clip-padding rounded-lg block mb-3"
            id="static-example"
            role="alert"
            aria-live="assertive"
            aria-atomic="true"
            data-mdb-autohide="false"
          >
            <div className="bg-red-600 flex justify-between items-center py-2 px-3 bg-clip-padding border-b green-blue-500 rounded-t-lg">
              <p className="font-bold text-white flex items-center">
                <svg
                  aria-hidden="true"
                  focusable="false"
                  data-prefix="fas"
                  data-icon="info-circle"
                  className="w-4 h-4 mr-2 fill-current"
                  role="img"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="currentColor"
                    d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"
                  ></path>
                </svg>
                Please fill all the details correctly.
              </p>
              <div className="flex items-center">
                <button
                  type="button"
                  onClick={() => setValid(true)}
                  className="text-white border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-white hover:opacity-75 hover:no-underline"
                  data-mdb-dismiss="toast"
                  aria-label="Close"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 18 18"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
