import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./Components/Home/Home";
import About from "./Components/About/About";
import Notice from "./Components/Notice/Notice";
import Contact from "./Components/Contact/Contact";
import Download from "./Components/Download/Download";
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
        path: "notice",
        element: <Notice />,
      },
      {
        path: "download",
        element: <Download />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
