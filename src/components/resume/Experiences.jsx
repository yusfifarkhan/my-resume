import React from "react";

const Experiences = () => {
  return (
    <span className="text-left">
      <br />
      <h1 className="border-white text-center font-bold uppercase text-primary-700 dark:rounded-md dark:bg-slate-400 dark:p-2 dark:text-white  lg:text-left lg:text-2xl">
        Work Experience
      </h1>
      <h3 className="text-center font-semibold capitalize lg:text-left lg:text-base">
        Pengalaman Kerja
      </h3>
      <hr className="my-2" />
      <div className="mb-4">
        {" "}
        <span className="text-left">
          <h1 className="w-fit font-bold uppercase text-primary-700 dark:rounded-md dark:bg-slate-400 dark:p-2 dark:text-white lg:text-lg">
            IT Support & Data management
          </h1>
          <h3 className="font-semibold capitalize lg:text-base">
            MTs Al Hikmah 1 Benda
          </h3>
          <div className="flex justify-between">
            <h3 className="capitalize italic lg:text-sm">09/2020 - 09/2022</h3>
            <h3 className="capitalize italic lg:text-sm">
              Brebes, Central Java, Indonesia
            </h3>
          </div>
          <div className="my-4">
            <ul className="ml-5 list-outside list-disc">
              <li>
                Design and establish a user-friendly School Information Website,
                including designed an online activity galery for advertising and
                archival purpose.
              </li>
              <li>
                Managed in situ IT infrastructures such as Computer, Local
                Server, Network Attached Device including{" "}
                <span className="italic">
                  (Printer, Copier & Scanning Device)
                </span>{" "}
                and created a quarterly inventory report.
              </li>
              <li>
                Digitized and managed a new tuition payment mechanism using a
                virtual-account payment system.
              </li>
              <li>
                Implement a modern student data collection workflow base on Web
                and Messenger Application.
              </li>
              <li>
                Provided hands-on training to staff members and active teacher
                in the new implemented application and workflow.
              </li>
            </ul>
          </div>
          <br />
        </span>
        <span className="text-left">
          <h1 className="w-fit font-bold uppercase text-primary-700 dark:rounded-md dark:bg-slate-400 dark:p-2 dark:text-white lg:text-lg">
            Video & Content Creator
          </h1>
          <h3 className="font-semibold capitalize lg:text-base">
            Creactiva Studio
          </h3>
          <div className="flex justify-between">
            <h3 className="capitalize italic lg:text-sm">03/2019 - 03/2020</h3>
            <h3 className="capitalize italic lg:text-sm">
              Tegal City, Central Java, Indonesia
            </h3>
          </div>
          <div className="my-4">
            <ul className="ml-5 list-outside list-disc">
              <li>
                Collaborated with Creative and Marketing Team to plan and
                develop marketable content that suitable based on client-request
                and market condition.
              </li>
              <li>
                Produce non-video based promotional content for both online and
                offline event including: Pamphlets, Logos, Banners, etc .
              </li>
              <li>
                Edit various type of video ranging from short less than 1-minute
                adverts to longer documentation video.
              </li>
              <li>
                Organize, render and compress footage for client review and
                footage distribution as requested.
              </li>
              <li>
                Membantu tim Kreatif dan Pemasaran dalam pengembangan dan
                pengiriman konten sesuai jadwal.{" "}
              </li>
            </ul>
          </div>
          <br />
        </span>
      </div>
    </span>
  );
};

export default Experiences;
