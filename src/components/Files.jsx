import React from "react";
import { FaLanguage } from "react-icons/fa";

const Files = () => {
  return (
    <section
      id="files"
      className="h-content top-20 w-full p-4 dark:bg-slate-600 dark:text-white"
    >
      <div className="flex max-w-screen-xl pt-6 pb-2 transition-all lg:px-28">
        <div className=" hidden bg-slate-200 dark:bg-slate-700 lg:inline-flex lg:basis-4/12">
          <img src="/assets/doc/CV.jpg" alt="Example CV" />
        </div>
        <div className="w-full rounded-md bg-slate-200 p-4 dark:bg-slate-700 lg:basis-10/12  lg:rounded-none">
          <h1 className="text-lg font-bold dark:text-white lg:text-2xl">
            Downloadable Resume
            <hr />
          </h1>
          <br />
          <div className="text-lg lg:text-xl">
            Downloadable print ready resume in Indonesian and English Version is
            available:
          </div>
          <br />
          <div className="flex max-w-full gap-2">
            <a
              href="https://drive.google.com/file/d/1-0tTTJEYzK3gyIsQNnmmtXhsdXGh8XHF/view?usp=sharing"
              target="_blank"
              class="inline-flex items-center rounded bg-primary-500 py-2 px-4 font-bold text-white hover:bg-primary-600"
            >
              <FaLanguage size={"24px"} /> &nbsp;
              <span>EN Version</span>
            </a>
            <a
              href="https://drive.google.com/file/d/1-1yrvL1RjnXd2GeNimmi0xz82cdpkxdO/view?usp=sharing"
              target="_blank"
              class="inline-flex items-center rounded bg-red-500 py-2 px-4 font-bold text-white hover:bg-red-600"
            >
              <FaLanguage size={"24px"} /> &nbsp;
              <span>JP Version</span>
            </a>
            <a
              href="https://drive.google.com/file/d/1-3ZV0spD89RYhDQMmbjqpZi0169PDEfx/view?usp=sharing"
              target="_blank"
              class="inline-flex items-center rounded bg-teal-500 py-2 px-4 font-bold text-white hover:bg-teal-600"
            >
              <FaLanguage size={"24px"} /> &nbsp;
              <span>JP Version ATF</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Files;
