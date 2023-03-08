import React from "react";

const Footer = () => {
  return (
    <div className="flex w-full justify-between bg-primary-600 px-8 py-6 text-base text-white dark:bg-slate-900 ">
      <div>Designed by: Farkhan</div>
      <div>{new Date().getFullYear()}</div>
    </div>
  );
};

export default Footer;
