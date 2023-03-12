import React, { useEffect, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import Button from "./Button";
import { YOUTUBE_VIDEOS_CATEGORY_API } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../utils/categorySlice";

// const items = [
//   { id: 1, title: "All" },
//   { id: 3, title: "Vlog" },
//   { id: 4, title: "Tranding" },
//   { id: 5, title: "Life Style" },
//   { id: 6, title: "Item 6" },
//   { id: 7, title: "Item 7" },
//   { id: 8, title: "Item 8" },
//   { id: 9, title: "Cricket" },
//   { id: 10, title: "Item 8" },
//   { id: 11, title: "Song" },
//   { id: 12, title: "Valentines" },
//   { id: 13, title: "News" },
//   { id: 14, title: "Cooking" },
// ];

const ButtonList = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const dispatch = useDispatch();

  const getCategories = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_CATEGORY_API);
    const json = await data.json();
    console.log(json);
    dispatch(setCategory(json.items));
  };

  useEffect(() => {
    getCategories();
  }, []);

  const items = useSelector((store) => store.category.categoryList);

  if (items?.length === 0) return null;

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
        {items.slice(currentIndex, currentIndex + 9).map((item) => (
          <Button key={item.id} title={item?.snippet?.title} />
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

export default ButtonList;
