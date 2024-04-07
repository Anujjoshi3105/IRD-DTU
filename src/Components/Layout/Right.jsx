import React, { useState } from "react";
import CommonList from "./CommonList";
import LatestNews from "./LatestNews";

const Right = () => {
  const technology = [{ text: "CSR Funds", url: "/technology/csr-funds" }];

  const sponsor = [
    {
      text: "Registrations/Certifications",
      url: "sponsor/registrations-certifications",
    },
  ];
  const faculty = [
    { text: "Young Faculty Grant", url: "/faculty/young-faculty-grant" },
    {
      text: "Sustainable Development Project Grant",
      url: "/faculty/sustainable-development-project",
    },
    {
      text: "Equipment Matching Grant",
      url: "/faculty/equipment-matching-grant",
    },
    {
      text: "Faculty Research Project",
      url: "/faculty/faculty-research-project",
    },
    {
      text: "Multi-Institutional Faculty Research Project",
      url: "/faculty/multi-institutional-faculty-research-project",
    },
  ];
  const student = [
    { text: "Discover & Learn", url: "/student/discover-and-learn" },
    {
      text: "Summer Research Internship Project",
      url: "/student/summer-research-internship",
    },
  ];

  const newItems = [
    {
      text: "Sponsored Projects - 21/02/2024",
      url: "#",
    },
    { text: "Research Projects - 21/02/2024", url: "#" },
    {
      text: "Sponsored Projects - 21/02/2024",
      url: "#",
    },
    { text: "Research Projects - 21/02/2024", url: "#" },
    {
      text: "Sponsored Projects - 21/02/2024",
      url: "#",
    },
    { text: "Research Projects - 21/02/2024", url: "#" },
    {
      text: "Sponsored Projects - 21/02/2024",
      url: "#",
    },
    { text: "Research Projects - 21/02/2024", url: "#" },
  ];
  return (
    <div className="lg:w-1/5 p-5">
      <LatestNews newsItems={newItems} />

      <div className="flex lg:flex-col justify-evenly hover:overflow-auto overflow-hidden">
        <CommonList heading="Technology Transfer" links={technology} />
        <CommonList heading="Sponsored Project" links={sponsor} />
        <CommonList heading="Faculty Schemes" links={faculty} />
        <CommonList heading="Student Schemes" links={student} />
      </div>
    </div>
  );
};

export default Right;
