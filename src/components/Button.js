import React from "react";

const Button = ({ title }) => {
  return (
    <div className="px-5 py-2 m-2 bg-gray-200 rounded-lg flex-shrink-0 max-w-[130px]">
      <p
        className="text-gray-800 text-sm truncate block cursor-pointer"
        data-te-toggle="tooltip"
        title={title}
      >
        {title}
      </p>
    </div>
  );
};

export default Button;
