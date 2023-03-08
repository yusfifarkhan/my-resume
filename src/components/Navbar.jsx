import React from "react";
import Header from "./navbar/Header";
import Menu from "./navbar/Menu";

const Navbar = () => {
  return (
    <nav className="sticky top-0 grid h-20 grid-cols-1 border-b-4 border-gray-200 border-b-slate-300 bg-primary-600 px-8 shadow dark:bg-slate-900 lg:px-32">
      <div className="container mx-auto flex flex-wrap items-center justify-between">
        <Header />
        <Menu />
      </div>
    </nav>
  );
};

export default Navbar;
