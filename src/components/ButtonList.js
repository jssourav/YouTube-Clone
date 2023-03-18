import React, { useEffect, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import Button from "./Button";
import { YOUTUBE_VIDEOS_CATEGORY_API } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../utils/categorySlice";

const ButtonList = () => {
  const [activeCategoryId, setActiveCategoryId] = useState(null);

  const [currentIndex, setCurrentIndex] = useState(0);
  const dispatch = useDispatch();

  const getCategories = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_CATEGORY_API);
    const json = await data.json();
    dispatch(setCategory(json.items));
  };

  useEffect(() => {
    getCategories();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const items = useSelector((store) => store.category.categoryList);

  if (!items) return null;

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
          <Button
            key={item.id}
            title={item?.snippet?.title}
            categoryId={item.id}
            activeCategoryId={activeCategoryId}
            onClick={() => setActiveCategoryId(item.id)}
          />
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
