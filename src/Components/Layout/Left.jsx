import React from "react";
import CommonList from "./CommonList";

const Left = () => {
  return (
    <div className="lg:w-1/4 xl:px-5">
      <div className="lg:flex lg:flex-col">
        <CommonList
          heading="Projects & Consultancies"
          links={[
            {
              text: "Sponsored Research Projects",
              url: "/sponsored-research-projects",
            },
            { text: "Consultancy Jobs", url: "/consultancy-jobs" },
            { text: "" },
            {
              text: "International Collaborations",
              url: "/international-collaborations",
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
          heading="Webinars"
          links={[{ text: "Webinars", url: "/webinars" }]}
        />
      </div>
    </div>
  );
};

export default Left;
