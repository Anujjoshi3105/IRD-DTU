import React from "react";
const About = () => {
  return (
    <div className="bg-gray-100 max-w-7xl md:w-3/5 mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
      {/* START CONTAINER */}

      <h1 className="text-3xl font-bold py-2">About</h1>

      <a
        href="#"
        className="flex flex-col items-center bg-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100">
        <img
          className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
          src="anil.jpg"
          alt=""
        />
        <div className="flex flex-col justify-between p-4 leading-normal">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-black ">
            Professor Anil Kumar Sahu
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
        </div>
      </a>

      {/* END CONTAINER */}
    </div>
  );
};

export default About;
