import React from "react";
import { MdOutlinePlaylistRemove } from "react-icons/md";

const EmptyItem = () => {
  return (
    <div className="flex place-content-center">
      <div className="flex w-full items-center rounded-md bg-red-400 p-2 lg:w-96 lg:p-4">
        <MdOutlinePlaylistRemove
          className="aspect-auto w-full basis-[20%]"
          color="white"
          size="48px"
        />
        <span className="basis-[80%] text-xl font-semibold text-white">
          List is empty!
        </span>
      </div>
    </div>
  );
};

export default EmptyItem;
