import React from "react";

const Progress = ({ name, value }) => {
  return (
    <div>
      <div className="my-1 flex justify-between">
        <span className="text-base font-medium text-blue-700 dark:text-white">
          {name}
        </span>
        <span className="text-sm font-medium text-blue-700 dark:text-white">
          {value}%
        </span>
      </div>
      <div className="h-2.5 w-full rounded-full bg-gray-400 dark:bg-gray-300">
        <div
          className="h-2.5 rounded-full bg-blue-600"
          style={{ width: value + "%" }}
        ></div>
      </div>
    </div>
  );
};

export default Progress;
