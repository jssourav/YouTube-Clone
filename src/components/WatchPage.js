import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeMenu } from "../utils/appSlice";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
  }, [dispatch]);

  return (
    <div className="px-5 ">
      <iframe
        width="1200"
        height="500"
        src={
          "https://www.youtube.com/embed/" +
          searchParams.get("v") +
          "?autoplay=1"
        }
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autolay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        autoplay
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default WatchPage;
