import React from "react";

const GalleryMenu = ({ cbSetKey, total }) => {
  return (
    <div className="w-full flex-row place-items-center justify-between sm:flex">
      <div className="inline-flex">
        <button
          onClick={() => {
            cbSetKey("all");
          }}
          className="rounded-l bg-gray-300 py-2 px-4 font-bold text-gray-800 hover:bg-gray-400 lg:px-8"
        >
          All
        </button>
        <button
          onClick={() => {
            cbSetKey("web");
          }}
          className="bg-gray-300 py-2 px-4 font-bold text-gray-800 hover:bg-gray-400 lg:px-8"
        >
          Web
        </button>
        <button
          onClick={() => {
            cbSetKey("graphic");
          }}
          className="bg-gray-300 py-2 px-4 font-bold text-gray-800 hover:bg-gray-400 lg:px-8"
        >
          Graphic
        </button>
        <button
          onClick={() => {
            cbSetKey("video");
          }}
          className="rounded-r bg-gray-300 py-2 px-4 font-bold text-gray-800 hover:bg-gray-400 lg:px-8"
        >
          Video
        </button>
      </div>
      <div className="dark:text-white">Showing: {total !== 0 ? total : 0}</div>
    </div>
  );
};

export default GalleryMenu;
