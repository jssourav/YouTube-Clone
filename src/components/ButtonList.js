import React from "react";
import Button from "./Button";

const list = [
  "All",
  "Cooking",
  "News",
  "Valentines",
  "Gaming",
  "Song",
  "Cricket",
  "Socker",
  "Live",
  "Vlog",
  "Life Style",
  "Tranding",
];

const ButtonList = () => {
  return (
    <div className="flex  justify-center items-center">
      {list.map((buttonName, index) => (
        <Button key={index} name={buttonName} />
      ))}
    </div>
  );
};

export default ButtonList;
