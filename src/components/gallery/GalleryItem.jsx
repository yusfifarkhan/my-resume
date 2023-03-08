import React from "react";
import { FaExternalLinkAlt, FaEye } from "react-icons/fa";

const GalerryItem = ({ title, image, type, link }) => {
  return (
    <div className="group flex flex-col rounded-lg bg-gray-100 transition-all duration-500">
      <div className="h-[16rem] overflow-hidden rounded-t-md bg-gray-400 p-4 text-white transition-all scrollbar-hide hover:overflow-y-auto">
        <img src={image} className="w-full rounded-md" />
      </div>
      <div className="flex h-[16vh] w-full justify-between rounded-b-md px-4 py-2 lg:h-[12vh]">
        <div className="truncate text-lg font-semibold capitalize">{title}</div>
        <div>
          <button className="rounded-md bg-yellow-500 p-2 hover:border hover:border-white hover:bg-yellow-300">
            {type === "graphic" ? (
              <a href={image} target="_blank">
                <FaEye color="white" />
              </a>
            ) : (
              <a href={link} target="_blank">
                <FaExternalLinkAlt color="white" />
              </a>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default GalerryItem;
