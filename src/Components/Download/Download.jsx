import React from "react";
import Table from "./Table";

const Download = () => {
  const data = [
    {
      title: "Document 1",
      department: "Department A",
      date: "01/03/2024",
      link: "#",
    },
    {
      title: "Document 2",
      department: "Department B",
      date: "01/04/2024",
      link: "#",
    },
  ];
  return (
    <div className="bg-gray-100 max-w-7xl md:w-3/5 mx-auto py-16 px-4 sm:px-6 lg:py-20 lg:px-8">
      <Table data={data} />
    </div>
  );
};

export default Download;
