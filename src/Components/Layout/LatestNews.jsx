import React from "react";
import { NavLink } from "react-router-dom";

const LatestNews = ({ newsItems }) => {
  return (
    <div className="py-2">
      <p className="font-bold text-lg">Latest News</p>
      <div className="overflow-y-scroll">
        <marquee direction="up" className="border-2">
          <ul className="lg:px-4">
            {newsItems.map((item, index) => (
              <li
                key={index}
                className="border-b-2 hover:text-gray-500 hover:font-semibold">
                <NavLink to={item.url}>{item.text}</NavLink>
              </li>
            ))}
          </ul>
        </marquee>
      </div>
    </div>
  );
};

export default LatestNews;
