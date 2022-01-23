import * as React from "react";
import { Formik, Field, Form, FormikHelpers } from "formik";

import { useRouter } from "next/router";

interface ContactProps {
  name: string;
  email: string;
  projectDesc: string;
}

export const Contact = () => {
  const router = useRouter();

  return (
    <div className="flex justify-center items-center h-screen mx-auto bg-gray-100">
      <Formik
        initialValues={{
          name: "",
          email: "",
          projectDesc: "",
        }}
        onSubmit={() => alert("Thank you!")}
        // onSubmit={(
        //   values: ContactProps,
        //   { setSubmitting }: FormikHelpers<ContactProps>
        // ) => {
        //   // call the server side method here to save the details
        //   fetch("https://mywebsite.com/endpoint/", {
        //     method: "POST",
        //     headers: {
        //       Accept: "application/json",
        //       "Content-Type": "application/json",
        //     },
        //     body: JSON.stringify(values),
        //   }).then(() => setSubmitting(false));
        // }}
      >
        <Form>
          <p className="text-4xl font-bold text-center text-black my-8">
            Contact us
          </p>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <Field
                className="block appearance-none placeholder-gray-500 placeholder-opacity-100 border border-cyan-700 rounded-md w-full py-3 px-4 text-gray-700 leading-5 focus:outline-none focus:ring-2 focus:ring-light-blue-300"
                id="name"
                name="name"
                placeholder="Name"
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <Field
                className="block appearance-none placeholder-gray-500 placeholder-opacity-100 border border-cyan-700 rounded-md w-full py-3 px-4 text-gray-700 leading-5 focus:outline-none focus:ring-2 focus:ring-light-blue-300"
                id="email"
                name="email"
                placeholder="Email"
                type="email"
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <Field
                as="textarea"
                className="resize-none block appearance-none placeholder-gray-500 placeholder-opacity-100 border border-cyan-700 rounded-md w-full py-3 px-4 text-gray-700 leading-5 focus:outline-none focus:ring-2 focus:ring-light-blue-300 h-56"
                id="projectDesc"
                placeholder="Comments.."
                name="projectDesc"
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
                Submit
              </button>
            </div>
          </div>
        </Form>
      </Formik>
    </div>
  );
};
