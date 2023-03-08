import React from "react";
import { BsChevronDoubleRight, BsGithub, BsInstagram } from "react-icons/bs";

const HeroText = () => {
  return (
    <div className="mr-auto place-self-center lg:col-span-7 lg:pl-16">
      <h3 className="400 mb-6 max-w-2xl font-light text-gray-500 dark:text-slate-300 md:text-lg lg:text-xl">
        Hello Everyone, My Name
      </h3>
      <h1 className="mb-4 max-w-2xl text-4xl font-extrabold leading-none tracking-tight dark:text-white md:text-5xl xl:text-6xl">
        Yusfi Farkhan
      </h1>
      <p className="mb-6 max-w-2xl font-light text-gray-500 dark:text-slate-300 md:text-lg lg:mb-8 lg:text-xl">
        A Computer Science graduate who love Web Development, 3D Design and
        Video Creation
      </p>
      <span className="inline-flex gap-3">
        <a
          href="#resume"
          className="mr-3 inline-flex items-center justify-center gap-4 rounded-lg bg-primary-700 px-5 py-3 text-center text-base font-medium text-white hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900"
        >
          Check My Resume!
          <BsChevronDoubleRight />
        </a>
        <a
          href="https://www.instagram.com/yusfi.farkhan/"
          className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-slate-50 px-5 py-3 text-center text-base font-medium text-gray-900 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:border-slate-50 dark:text-black dark:hover:bg-slate-200 dark:focus:ring-gray-800"
        >
          <BsInstagram />
        </a>
        <a
          href="https://github.com/yusfifarkhan"
          className="inline-flex items-center justify-center rounded-lg border border-gray-300 bg-slate-50 px-5 py-3 text-center text-base font-medium text-gray-900 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:border-slate-50 dark:text-black dark:hover:bg-slate-200 dark:focus:ring-gray-800"
        >
          <BsGithub />
        </a>
      </span>
    </div>
  );
};

export default HeroText;
