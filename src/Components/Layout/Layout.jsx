import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Left from "./Left";
import Right from "./Right";
import { Outlet } from "react-router-dom";
const Layout = () => {
  return (
    <>
      <Header />
      <div className="lg:flex p-8 text-wrap justify-center">
        <Left />
        <Outlet />
        <Right />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
