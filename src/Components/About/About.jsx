import React from "react";

import Profile from "./Profile";

const About = () => {
  return (
    <div className="bg-slate-50 lg:w-3/5 mx-auto p-10 rounded-xl">
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
      <div className="pb-8">
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
      <div className="pb-8">
        <h1 className="lg:text-2xl text-xl font-bold pb-4">ADMINISTRATION</h1>
        <Profile
          imageSrc="https://dtu.irins.org/assets/profile_images/66951.jpg"
          name="Prof. Anil Kumar Sahu"
          title="Dean, IRD"
          telephone="98XXXXXXXX"
          email="anil@dtu.ac.in"
          link="https://dtu.irins.org/profile/66951"
        />
        <Profile
          imageSrc="https://dtu.irins.org/assets/profile_images/67071.jpg"
          name="Dr. Roli Pawar"
          title="Associate Dean & Coordinator IPR"
          telephone="98XXXXXXXX"
          email="roli@dtu.ac.in"
          link="https://dtu.irins.org/profile/67071"
        />
        <Profile
          imageSrc="https://dtu.irins.org/assets/profile_images/212764.jpg"
          name="Dr. Rajeev Kumar"
          title="Co-Coordinator IPR"
          telephone="98XXXXXXXX"
          email="roli@dtu.ac.in"
          link="https://dtu.irins.org/profile/212764"
        />

        <Profile
          imageSrc="https://dtu.irins.org/assets/profile_images/66867.jpg"
          name="Prof. Sudhir G. Warker"
          title="NEP Coordinator"
          telephone="98XXXXXXXX"
          email="sudhir@dtu.ac.in"
          link="https://dtu.irins.org/profile/66867"
        />

        <Profile
          imageSrc="https://dtu.irins.org/assets/profile_images/212764.jpg"
          name="Ms. Nisha Panchal"
          title="Co-Cordinator IPR"
          telephone="98XXXXXXXX"
          email="nisha@dtu.ac.in"
          link="https://dtu.irins.org/profile/212764"
        />
      </div>

      {/* END CONTAINER */}
    </div>
  );
};

export default About;
