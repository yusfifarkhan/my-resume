import React from "react";
import Bio from "./resume/Bio";
import Contact from "./resume/Contact";
import Education from "./resume/Education";
import Courses from "./resume/Education";
import Experiences from "./resume/Experiences";
import Info from "./resume/Info";
import Profile from "./resume/Profile";
import Training from "./resume/Training";

const Resume = () => {
  return (
    <section
      id="resume"
      className="h-content top-20 w-full p-4 dark:bg-slate-600 dark:text-white"
    >
      <div className="max-w-screen-xl py-6 lg:flex lg:px-28 lg:py-0 lg:pt-[12vh]">
        <div className="flex-1 rounded-t-md bg-slate-200 dark:bg-slate-700 lg:basis-4/12 lg:rounded-none ">
          <Profile />
          <Info />
        </div>
        <div className="bg-slate-100 p-4 dark:bg-slate-500 lg:basis-10/12">
          <Bio />
          <Contact />
          <Experiences />
          <Education />
          <Training />
        </div>
      </div>
    </section>
  );
};

export default Resume;
