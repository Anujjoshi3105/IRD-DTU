import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="p-4 md:p-8 lg:p-10 bg-black">
      <div className="mx-auto max-w-screen-xl text-center lg:w-2/5 w-4/5">
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
            <a
              href="#"
              className="mr-4 hover:underline hover:text-gray-400 hover:font-bold md:mr-6">
              FAQs
            </a>
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
          © 2024-2025{" "}
          <a
            href="#"
            className="hover:underline hover:text-gray-400 hover:font-bold ">
            DTU-IRD
          </a>
          . All rights are reserved.
        </span>
      </div>
    </footer>
  );
};
export default Footer;
