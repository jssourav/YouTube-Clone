import React from "react";

const Shimmer = () => {
  return (
    <div className="flex flex-wrap justify-center items-center">
      {Array(28)
        .fill("")
        .map((e, index) => (
          <div
            key={index}
            className="p-2 m-2 w-72 shadow-lg h-[260px]  max-w-sm bg-gray-300 border border-gray-200 rounded-lg mt-4 mb-4 animate-pulse"
          ></div>
        ))}
    </div>
  );
};

export default Shimmer;
