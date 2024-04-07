import React from "react";
import Table from "./Table";

const form = [
  {
    head: "Form for Approval of Consultancy Project",
    body: "",
    link: "https://www.youtube.com/watch?v=JDFHcU3VUMQ",
  },
  {
    head: "Form for Approval of Sponsored Project",
    body: "",
    link: "dtu.pdf",
  },
];
const Webinar = () => {
  return (
    <div className="bg-slate-50 lg:w-3/5 mx-auto p-10 rounded-xl">
      <div>
        <Table heading="Webinars" items={form} />
      </div>
    </div>
  );
};

export default Webinar;
