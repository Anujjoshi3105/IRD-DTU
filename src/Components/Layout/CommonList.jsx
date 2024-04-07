import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const CommonList = ({ heading, links }) => {
  const [listVisible, setListVisible] = useState(true);

  const toggleList = () => {
    setListVisible((prevVisible) => !prevVisible);
  };

  const iconRotation = listVisible ? "rotate(0deg)" : "rotate(180deg)";

  return (
    <div className="lg:pb-2 lg:border-b-2 mx-3 my-2 lg:mx-0">
      <p
        className="font-bold lg:text-lg text-nowrap cursor-pointer"
        onClick={toggleList}>
        {heading}{" "}
        <button aria-label="Toggle List">
          <svg
            className="w-4 h-4 transition-transform duration-300 transform"
            style={{ transform: iconRotation }}
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        </button>
      </p>
      {listVisible && (
        <ul className="px-5 list-disc text-sm">
          {links.map((link, index) => (
            <li key={index} className="hover:text-gray-500 hover:font-semibold">
              <NavLink to={link.url}>{link.text}</NavLink>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CommonList;
