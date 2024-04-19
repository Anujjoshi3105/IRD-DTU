import React from "react";

("use client");

import { Carousel } from "flowbite-react";
import { NavLink } from "react-router-dom";

const Young = () => {
  return (
    <div className="bg-slate-50 lg:w-3/5 mx-auto p-10 rounded-xl">
      <div className="pb-8">
        <h1 className="lg:text-3xl text-2xl font-bold pb-6">
          YOUNG FACULTY GRANT
        </h1>
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
      </div>
      <div className="h-56 sm:h-64 2xl:h-72">
        <Carousel slideInterval={4000}>
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
      <div className="py-8">
        <h1 className="text-xl font-bold pb-2">ELIGIBLITY</h1>
        <p>
          Any DTU Faculty/ Professor/ Researcher can apply for the scholarship,
          with following criteria
        </p>
        <ul className="list-disc pl-5 p-2">
          <li>Must be an Indian citizen.</li>
          <li>Must be an Indian citizen.</li>
          <li>Must be an Indian citizen.</li>
          <li>Must be an Indian citizen.</li>
          <li>Must be an Indian citizen.</li>
        </ul>
      </div>
    </div>
  );
};

export default Young;
