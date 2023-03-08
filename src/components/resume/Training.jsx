import React from "react";

const Training = () => {
  return (
    <span className="text-left">
      <br />
      <h1 className="border-white text-center font-bold uppercase text-primary-700 dark:rounded-md dark:bg-slate-400 dark:p-2 dark:text-white  lg:text-left lg:text-2xl">
        Courses & Certificate
      </h1>
      <h3 className="text-center font-semibold capitalize lg:text-left lg:text-base">
        Kursus & Sertifikitat
      </h3>
      <hr className="my-2" />
      <div className="my-4">
        <ul className="ml-5 list-outside list-disc">
          <li>
            <b>The Complete 2023 Web Development Bootcamp</b> <br />
            <i>(Kamp Pelatihan Pengembangan Web 2023 Lengkap)</i>
            <br />
            <span className="italic">Udemy.com</span>{" "}
          </li>
          <li>
            <b>Learn Basic JavaScript Programming</b> <br />
            <i>(Belajar Dasar Pemrograman JavaScript )</i>
            <br />
            <span className="italic">Dicoding.com</span>{" "}
          </li>
          <li>
            <b>Learn Front-End Web Development Fundamentals</b> <br />
            <i>(Belajar Fundamental Front-End Web Development)</i>
            <br />
            <span className="italic">Dicoding.com</span>{" "}
          </li>
          <li>
            <b>Learn to Create Back-End Applications for Beginners</b> <br />
            <i>(Belajar Membuat Aplikasi Back-End untuk Pemula)</i>
            <br />
            <span className="italic">Dicoding.com</span>{" "}
          </li>
          <li>
            <b>Computer Literate Certified Professional</b> <br />
            <i>(Profesional Bersertifikat Melek Komputer)</i>
            <br />
            <span className="italic">BPTIK Kominfo</span>{" "}
          </li>
          <li>
            <b>Junior Web Programmer</b> <br />
            <i>(Pemrogram Web Muda)</i>
            <br />
            <span className="italic">BPTIK Kominfo</span>{" "}
          </li>
        </ul>
      </div>
      <br />
    </span>
  );
};

export default Training;
