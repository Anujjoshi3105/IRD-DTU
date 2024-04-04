import React from "react";
import { NavLink } from "react-router-dom";

const LatestNews = ({ newsItems }) => {
  return (
    <div className="py-2 max-h-40 overflow-hidden mb-4">
      <p className="font-bold text-lg">LATEST NEWS</p>
      <marquee direction="up" className="border-2">
        <ul className="lg:px-4 text-sm">
          {newsItems.map((item, index) => (
            <li
              key={index}
              className="border-b-2 hover:text-gray-500 hover:font-semibold focus:text-blue-400">
              <NavLink to={item.url}>{item.text}</NavLink>
            </li>
          ))}
        </ul>
      </marquee>
    </div>
  );
};

export default LatestNews;
