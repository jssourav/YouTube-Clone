import React, { useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";

const items = [
  { id: 1, title: "Item 1" },
  { id: 2, title: "Item 2" },
  { id: 3, title: "Item 3" },
  { id: 4, title: "Item 4" },
  { id: 5, title: "Item 5" },
  { id: 6, title: "Item 6" },
  { id: 7, title: "Item 7" },
  { id: 8, title: "Item 8" },
  { id: 9, title: "Item 8" },
  { id: 10, title: "Item 8" },
  { id: 11, title: "Item 8" },
  { id: 12, title: "Item 8" },
  { id: 13, title: "Item 8" },
  { id: 14, title: "Item 8" },
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const onNextClick = () => {
    if (currentIndex < items.length - 4) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const onPrevClick = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  return (
    <div className="flex items-center">
      <button
        className={`p-2 ${
          currentIndex === 0
            ? "opacity-50 cursor-not-allowed"
            : "cursor-pointer"
        }`}
        onClick={onPrevClick}
        disabled={currentIndex === 0}
      >
        <ChevronLeftIcon className="h-5 w-5" />
      </button>
      <div className="w-full flex items-center justify-start space-x-4 ">
        {items.slice(currentIndex, currentIndex + 11).map((item) => (
          <div
            className="px-5 py-2 m-2 bg-gray-200 rounded-lg flex-shrink-0"
            key={item.id}
          >
            <p className="text-gray-800 text-lg">{item.title}</p>
          </div>
        ))}
      </div>
      <button
        className={`p-2 ${
          currentIndex >= items.length - 4
            ? "opacity-50 cursor-not-allowed"
            : "cursor-pointer"
        }`}
        onClick={onNextClick}
        disabled={currentIndex >= items.length - 4}
      >
        <ChevronRightIcon className="h-5 w-5" />
      </button>
    </div>
  );
};

export default Carousel;
