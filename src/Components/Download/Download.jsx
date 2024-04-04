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
    <div className="bg-gray-50 lg:w-3/5 mx-auto p-10 rounded-xl">
      <Table data={data} />
    </div>
  );
};

export default Download;
