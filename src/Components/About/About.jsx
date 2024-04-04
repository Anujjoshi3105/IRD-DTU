import React from "react";

import { Tabs } from "flowbite-react";
import { HiAdjustments, HiClipboardList, HiUserCircle } from "react-icons/hi";
import { MdDashboard } from "react-icons/md";

const About = () => {
  return (
    <div className="bg-gray-50 lg:w-3/5 mx-auto p-10 rounded-xl">
      {/* START CONTAINER */}
      <div className="pb-8">
        <h1 className="lg:text-2xl text-xl font-bold pb-2">INTRODUCTION</h1>
        <p>
          Sponsored research and Industrial consultancy projects are an
          essential means of enhancing institution-industry interaction and
          faculty development. By supporting the Govt, PSU and the industry, the
          University intends to contribute towards the country’s economic growth
          and serve the society. Therefore, as a matter of policy, the
          University encourages its faculty members to undertake scientific and
          technical research/collaboration and consultancy work with outside
          agencies.
        </p>
      </div>
      <div>
        <h1 className="lg:text-2xl text-xl font-bold pb-2">OBJECTIVES</h1>
        <p>
          The objectives of promoting University consultancy and sponsored
          research project in the University shall be as given below:
        </p>
        <ul className="list-disc pl-5 p-2">
          <li>
            The primary objective of undertaking any sponsored research projects
            and consultancy works shall be creation of new knowledge, widening
            and expansion of existing knowledge and experience of faculty and
            staff members.
          </li>
          <li>
            All types of sponsored research projects and consultancy works
            irrespective of value of the project shall be acceptable so long as
            there is a distinct value addition to the faculty and staff. The
            work must be challenging and must involve niche areas of expertise
            available in the University
          </li>
          <li>
            The research and consultancy works which are likely to bring repute
            to the University and increase the number of patents in favour of
            the faculty and the University will be given the top priority.
          </li>
          <li>
            All University consultancy and sponsored research projects in
            support/partnership of National and International agencies, Govt,
            PSUs, or Industries engaged in development of major infrastructure
            and/or in economic development shall be considered subject to the
            academic and administrative restrictions laid down by the
            University.
          </li>
        </ul>
      </div>
      {/* END CONTAINER */}
    </div>
  );
};

export default About;
