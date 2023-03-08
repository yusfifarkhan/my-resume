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
          <img src="/assets/doc/CV.png" alt="Example CV" />
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
          <div className="grid w-full grid-flow-col place-content-between gap-2 lg:place-content-start">
            <a
              href="https://drive.google.com/file/d/1IIUM2-_SUXf9gQd_xzUqkcwFxLqaSelL/view?usp=sharing"
              target="_blank"
            >
              <button className="inline-flex w-fit items-center rounded bg-primary-500 py-2 px-4 text-base font-bold text-white hover:bg-primary-600">
                <FaLanguage size={"24px"} /> &nbsp;
                <span>EN Version</span>
              </button>
            </a>
            <a
              href="https://drive.google.com/file/d/14iObK0niBCIe94MVitAuvmf6UYJV5Zvm/view?usp=share_link"
              target="_blank"
            >
              <button className="inline-flex w-fit items-center rounded bg-red-500 py-2 px-4 text-base font-bold text-white hover:bg-red-600">
                <FaLanguage size={"24px"} /> &nbsp;
                <span>ID Version</span>
              </button>
            </a>
            {/* <button className="text-grey-darkest inline-flex w-fit items-center rounded bg-slate-100 py-2 px-4 text-base font-bold text-red-600 hover:bg-slate-300">
              <FaLanguage size={"24px"} /> &nbsp;
              <span>JP Version</span>
            </button> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Files;
