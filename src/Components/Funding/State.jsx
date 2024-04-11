import React from "react";
import Card from "./Card";

const State = () => {
  return (
    <div className="bg-slate-50 lg:w-3/5 mx-auto p-10 rounded-xl">
      {/* START CONTAINER */}
      <div className="pb-8">
        <h1 className="lg:text-3xl text-xl font-bold pb-2">STATE AGENCIES</h1>
        <Card></Card>
      </div>
    </div>
  );
};

export default State;
