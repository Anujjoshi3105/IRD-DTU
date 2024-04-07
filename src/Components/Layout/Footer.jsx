import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="p-8 bg-black">
      <div className="mx-auto text-center lg:w-2/5 w-4/5">
        <p className="my-4 text-gray-300">
          Office of International Affairs, Mechanical Engineering Block, Delhi
          Technological University, Shahbad Daulatpur, Rohini, New Delhi-110042
        </p>
        <ul className="flex justify-center items-center mb-6 text-white">
          <li>
            <NavLink
              to="/about"
              className="mr-4 hover:underline hover:text-gray-400 hover:font-bold md:mr-6">
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/download"
              className="mr-4 hover:underline hover:text-gray-400 hover:font-bold md:mr-6">
              Download
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className="mr-4 hover:underline hover:text-gray-400 hover:font-bold md:mr-6">
              Contact
            </NavLink>
          </li>
        </ul>
        <span className="text-sm text-gray-300 sm:text-center">
          © 2024{" "}
          <a
            href="#"
            className="hover:underline hover:text-gray-400 hover:font-bold ">
            IRD-DTU
          </a>
          . All rights are reserved.
        </span>
      </div>
    </footer>
  );
};
export default Footer;
