import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

function Header() {
  const Links = [
    {
      name: "HOME",
      link: "/",
    },
    {
      name: "ABOUT",
      link: "/about",
    },
    {
      name: "DOWNLOAD",
      link: "/download",
    },
    {
      name: "CONTACT",
      link: "/contact",
    },
  ];
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  const closeNavbar = () => {
    setIsOpen(false);
  };

  return (
    <header className="top-0">
      {/* HEADER TOP START */}
      <div className="bg-blue-900 flex justify-center items-center flex-row mx-auto">
        <img src="/logo.png" alt="IRD-DTU" className="h-12 mx-2" />
        <div className="p-4 justify-between">
          <h1 className="text-xl sm:text-2xl md:text-3xl text-white font-bold -m-0.5">
            INDUSTRIAL RESEARCH & DEVELOPMENT CENTRE
          </h1>
          <h2 className="sm:text-lg  text-gray-400">
            Delhi Technological University
          </h2>
        </div>
      </div>
      {/* HEADER TOP END */}

      {/* HEADER BOTTOM START */}
      <nav className="flex bg-black border-gray-400 text-white w-full border-b-4 justify-end px-5 lg:px-10 ">
        <div
          className={`w-full md:block md:w-auto ${isOpen ? "" : "hidden"}`}
          id="navbar-default">
          <ul className="flex flex-col md:flex-row">
            {Links.map((link, index) => (
              <li
                key={index}
                className={`font-bold hover:text-black hover:bg-gray-400 px-4 py-2 ${
                  location.pathname === link.link
                    ? "text-black bg-gray-400"
                    : ""
                }`}
                onClick={closeNavbar} // Close navbar on click
              >
                <NavLink to={link.link}>{link.name}</NavLink>
              </li>
            ))}
          </ul>
        </div>
        <button
          onClick={toggleNavbar}
          type="button"
          className="p-2 w-8 h-10 text-sm text-white md:hidden hover:text-gray-500"
          aria-controls="navbar-default"
          aria-expanded={isOpen ? "true" : "false"}>
          {isOpen ? (
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14">
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          )}
        </button>
      </nav>

      {/* HEADER BOTTOM END */}
    </header>
  );
}

export default Header;
