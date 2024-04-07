import React from "react";

("use client");

import { Carousel } from "flowbite-react";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className="bg-slate-50 lg:w-3/5 mx-auto p-10 rounded-xl">
      <div className="h-56 sm:h-64 xl:h-80 2xl:h-96">
        <Carousel slideInterval={4000}>
          <img
            src="https://dtutimes.dtu.ac.in/static/media/6.6a9438c5.jpeg"
            alt="..."
          />
          <img
            src="https://dtutimes.dtu.ac.in/static/media/crowd.10810342.jpg"
            alt="..."
          />
          <img
            src="https://media.licdn.com/dms/image/D5622AQHa-mOuoQzXdA/feedshare-shrink_800/0/1708709444584?e=2147483647&v=beta&t=VAezImY-tMkgSNzrq5F8Fl9LvRwWWepzAaks01Yg0y4"
            alt="..."
          />
          <img
            src="https://media.licdn.com/dms/image/D5622AQFcuQHKYctylg/feedshare-shrink_800/0/1709296884537?e=2147483647&v=beta&t=Yst-kSK27yRPaXphs-GDSmmBmexxpFio1PnX6UbJMFA"
            alt="..."
          />
        </Carousel>
      </div>
      <div className="pb-8">
        <h1 className="lg:text-2xl text-xl font-bold pt-10 pb-2">ABOUT IRD</h1>
        <p>
          In the light of changing economic scenario, government policies and
          University priorities, the University considers sponsored research and
          industrial consultancy projects as an important means for extending
          benefit of scientific research work at the University to the
          sponsoring agencies broadening the experience base of the University
          community and as a tool for contributing to the country’s and economic
          growth. Therefore, as a matter of policy, the University encourages
          its faculty members to undertake research and consultancy work as a
          measure of scientific/technical collaboration with outside agencies.
        </p>

        <NavLink to="/about" className="text-blue-500 focus:outline-none">
          Read More...
        </NavLink>
      </div>
      <div className="flex md:flex-row flex-col gap-2">
        <div className="bg-gray-100 w-full p-5 rounded-lg">
          <h1 className="text-xl font-bold py-2">NEWSLETTER</h1>
          <iframe
            src="dtu.pdf"
            className="w-full h-52 overflow-hidden"></iframe>
        </div>
        <div className="bg-gray-100 w-full p-5 rounded-lg">
          <h1 className="text-xl font-bold py-2">NEWSLETTER</h1>
          <iframe src="dtu.pdf" className="w-full h-52 "></iframe>
        </div>
      </div>
    </div>
  );
};

export default Home;
