import React, { useState } from "react";
import CommonList from "./CommonList";
import LatestNews from "./LatestNews";

const Right = () => {
  const [projectListVisible, setProjectListVisible] = useState(false);
  const [generalListVisible, setGeneralListVisible] = useState(false);

  const toggleProjects = () => {
    setProjectListVisible(!projectListVisible);
  };

  const toggleGeneral = () => {
    setGeneralListVisible(!generalListVisible);
  };

  const projectListItems = [
    { text: "Sponsored Research Projects", link: "#" },
    { text: "Consultancy Jobs", link: "#" },
    { text: "International Collaborations", link: "#" },
    { text: "Statistics", link: "#" },
    { text: "Significant Products & Technologies", link: "#" },
    {
      text: "Significant Products & Technologies Developed at Delhi",
      link: "#",
    },
  ];

  const generalListItems = [
    { text: "Registrations/Certifications", link: "#" },
    { text: "Information for Vendor Registration", link: "#" },
    { text: "Intellectual Property Rights (IPR)", link: "#" },
    { text: "Open House", link: "#" },
    { text: "ITRs/Annual Reports/Annual Accounts", link: "#" },
    { text: "Concessional GST Notification", link: "#" },
  ];
  const newItems = [
    {
      text: "Sponsored Projects - 21/02/2024",
      url: "/sponsored-projects",
    },
    { text: "Research Projects - 21/02/2024", url: "/research-projects" },
  ];
  return (
    <div className="lg:w-1/4 flex flex-col lg:px-10 my-10">
      <LatestNews newsItems={newItems} />
      <CommonList
        heading="Projects & Consultancies"
        visible={projectListVisible}
        toggleList={toggleProjects}
        links={projectListItems}
      />
      <CommonList
        heading="General Information"
        visible={generalListVisible}
        toggleList={toggleGeneral}
        links={generalListItems}
      />
    </div>
  );
};

export default Right;
