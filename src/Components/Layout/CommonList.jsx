import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const CommonList = ({ heading, links }) => {
  const [listVisible, setListVisible] = useState(true);

  const toggleList = () => {
    setListVisible(!listVisible);
  };

  return (
    <div className="lg:py-2 lg:border-b-2">
      <p className="font-bold lg:text-lg text-nowrap" onClick={toggleList}>
        {heading}{" "}
        <i
          className={`fa ${
            listVisible ? "fa-angle-up" : "fa-angle-down"
          } cursor-pointer font-semibold hover:text-gray-400`}></i>
      </p>
      <ul className={`px-5 list-disc ${listVisible ? "" : "hidden"} text-sm`}>
        {links.map((link, index) => (
          <li key={index} className="hover:text-gray-500 hover:font-semibold">
            <NavLink to={link.url}>{link.text}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CommonList;
