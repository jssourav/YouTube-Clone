import React from "react";
import { useDispatch } from "react-redux";
import { YOUTUBE_VIDEOS_SEARCH_API } from "../utils/constant";
import { setVideos } from "../utils/videosSlice";

const Button = ({ title, categoryId, activeCategoryId, onClick }) => {
  const isActive = categoryId === activeCategoryId;
  const dispatch = useDispatch();
  const setVideosHandler = async (categoryId) => {
    const data = await fetch(
      YOUTUBE_VIDEOS_SEARCH_API + "&videoCategoryId=" + categoryId
    );
    const json = await data.json();
    dispatch(setVideos(json.items));
    onClick(categoryId);
  };
  return (
    <div
      className={`${
        isActive === true ? "bg-black" : "bg-gray-200"
      } px-5 py-2 m-2 rounded-lg flex-shrink-0 max-w-[130px]`}
    >
      <p
        className={`${
          isActive === true ? "text-white" : "text-gray-800"
        }  text-sm truncate block cursor-pointer`}
        data-te-toggle="tooltip"
        title={title}
        onClick={() => setVideosHandler(categoryId)}
      >
        {title}
      </p>
    </div>
  );
};

export default Button;
