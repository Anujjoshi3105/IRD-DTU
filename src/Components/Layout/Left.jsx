import React from "react";
import CommonList from "./CommonList";

const Left = () => {
  return (
    <div className="lg:w-1/4 xl:px-5">
      <div className="flex lg:flex-col justify-evenly hover:overflow-auto gap-16 lg:gap-0 overflow-hidden lg:m-0 mb-5">
        <CommonList
          heading="Projects & Consultancies"
          links={[
            {
              text: "Sponsored Research Projects",
              url: "/sponsored-research-projects",
            },
            { text: "Consultancy Jobs", url: "/consultancy-jobs" },
            {
              text: "International Collaborations",
              url: "/international-collaborations",
            },
            {
              text: "Statistics",
              url: "/statistics",
            },
          ]}
        />

        <CommonList
          heading="General Information"
          links={[
            { text: "Registrations/Certifications", url: "/registrations" },
            {
              text: "Information for Vendor Registration",
              url: "/vendor-registration",
            },
            { text: "Intellectual Property Rights (IPR)", url: "/ipr" },
          ]}
        />
        <CommonList
          heading="Funding Agencies"
          links={[
            { text: "Goverment Agencies", url: "/government-agencies" },

            { text: "State Agencies", url: "/state-agencies" },
          ]}
        />
        <CommonList
          heading="Webinars"
          links={[{ text: "Webinars", url: "/webinars" }]}
        />
      </div>
    </div>
  );
};

export default Left;
