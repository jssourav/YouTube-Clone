import React, { useEffect } from "react";
import ButtonList from "./ButtonList";
import VideoContainer from "./VideoContainer";
import { YOUTUBE_VIDEOS_CATEGORY_API } from "../utils/constant";
import { useDispatch } from "react-redux";
import { setCategory } from "../utils/categorySlice";

const MainContainer = () => {
  // const dispatch = useDispatch();

  // const getCategories = async () => {
  //   const data = await fetch(YOUTUBE_VIDEOS_CATEGORY_API);
  //   const json = await data.json();
  //   console.log(json);
  //   dispatch(setCategory(json.items));
  // };

  // useEffect(() => {
  //   getCategories();
  // }, []);

  return (
    <div className="">
      <ButtonList />
      <VideoContainer />
    </div>
  );
};

export default MainContainer;
