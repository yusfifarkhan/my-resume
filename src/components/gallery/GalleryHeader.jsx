import React from "react";
import { FiPhoneCall } from "react-icons/fi";

const GalleryHeader = () => {
  return (
    <div className="mx-auto flex w-full flex-col gap-2">
      <div className="text-2xl font-bold dark:text-white">
        Farkhan's Gallery
      </div>
      <div className="text-base font-bold dark:text-white">
        Let's create something exciting.
      </div>
      <a href="tel:+6281390667626">
        <button className="mr-3 inline-flex w-fit items-center justify-center gap-4 rounded-lg bg-primary-600 py-2 px-8 text-center text-base font-medium text-white hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
          <FiPhoneCall />
          <span>Hire Me</span>
        </button>
      </a>
    </div>
  );
};

export default GalleryHeader;
