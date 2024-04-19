import React, { useState } from "react";
import CommonList from "./CommonList";

const Left = () => {
  const Project = [
    {
      text: "Sponsored Research Projects",
      url: "/sponsored-research-projects",
    },
    { text: "Consultancy Jobs", url: "/consultancy-jobs" },
    { text: "Statistics", url: "/statistics" },
    { text: "MOUs / EOI", url: "/mous-eoi" },
    {
      text: "Significant Products & Technologies",
      url: "/products-techanologies",
    },
  ];

  const generalInfo = [
    {
      text: "Registrations/Certifications",
      url: "/registrations-certifications",
    },
    {
      text: "Information for Vendor Registration",
      url: "/vendor-registration-info",
    },
    {
      text: "Intellectual Property Rights (IPR)",
      url: "/ipr-info",
    },
    { text: "Annual Reports", url: "/annual-reports" },
  ];

  const fundingAgency = [
    {
      text: "Central Agencies",
      url: "funding-agencies/state-agencies",
    },
    { text: "State Agencies", url: "funding-agencies/state-agencies" },
  ];

  const events = [
    { text: "Webinars", url: "industrial-event/webinar" },
    { text: "Seminars", url: "/seminars" },
    { text: "Workshops", url: "/workshops" },
  ];

  const incentive = [
    {
      text: "Research Excellence Awards",
      url: "/research-excellence-awards",
    },
    { text: "Citation Awards", url: "/citation-awards" },
    { text: "Innovation Awards", url: "/innovation-awards" },
  ];

  return (
    <div className="lg:w-1/5 flex lg:flex-col overflow-auto  mb-5 p-5">
      <CommonList heading="Projects & Consultancies" links={Project} />
      <CommonList heading="General Information" links={generalInfo} />
      <CommonList heading="Funding Agencies" links={fundingAgency} />
      <CommonList heading="Incentives" links={incentive} />
      <CommonList heading="Industrial Event" links={events} />
    </div>
  );
};

export default Left;
