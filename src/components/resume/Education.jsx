import React from "react";

const Education = () => {
  return (
    <span className="text-left">
      <br />
      <h1 className="border-white text-center font-bold uppercase text-primary-700 dark:rounded-md dark:bg-slate-400 dark:p-2 dark:text-white  lg:text-left lg:text-2xl">
        Education
      </h1>
      <h3 className="text-center font-semibold capitalize lg:text-left lg:text-base">
        Pendidikan
      </h3>
      <hr className="my-2" />
      <div className="my-4">
        <ul className="ml-5 list-outside list-disc">
          <li>
            <b>Bachelor of Informatics Engineering</b> <br />
            <i>(Sarjana Teknik Informatika)</i>
            <br />
            <span className="italic">
              STIMIK Tunas Bangsa Banjarnegara GPA/IPK: 3.60
            </span>{" "}
          </li>
          <li>
            <b>Diploma of Informatics Computer</b> <br />
            <i>(Diploma Informatika Komputer)</i>
            <br />
            <span className="italic">LP3I BC Tegal GPA/IPK: 3.59</span>{" "}
          </li>
        </ul>
      </div>
      <br />
    </span>
  );
};

export default Education;
