import React from "react";
import Table from "./Table";

const Download = () => {
  const notice = [
    {
      head: "Norms, Rules & Regulation for undertaking sponsored Research",
      body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      link: "dtu.pdf",
    },
    {
      head: "Norms, Rules & Regulation for undertaking faculty Research",
      body: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      link: "dtu.pdf",
    },
  ];
  const circular = [
    {
      head: "Norms, Rules & Regulation for undertaking sponsored Research",
      body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      link: "dtu.pdf",
    },
    {
      head: " Rules & Regulation for undertaking faculty Research",
      body: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      link: "dtu.pdf",
    },
  ];
  const form = [
    {
      head: "Form for Approval of Consultancy Project",
      body: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
      link: "dtu.pdf",
    },
    {
      head: "Form for Approval of Sponsored Project",
      body: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
      link: "dtu.pdf",
    },
  ];
  return (
    <div className="bg-slate-50 lg:w-3/5 mx-auto p-10 rounded-xl">
      <Table heading="Notice" items={notice} />
      <Table heading="Circular" items={circular} />
      <Table heading="Form" items={form} />
    </div>
  );
};

export default Download;
