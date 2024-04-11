import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Download from "./Components/Download/Download";
import Young from "./Components/Faculty/Young";
import State from "./Components/Funding/State";
import Webinar from "./Components/Webinar/Webinar";
import Layout from "./Components/Layout/Layout";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "download",
        element: <Download />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "faculty/young-faculty-grant",
        element: <Young />,
      },
      {
        path: "industrial-event/webinar",
        element: <Webinar />,
      },
      {
        path: "funding-agencies/state-agencies",
        element: <State />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
