import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { YOUTUBE_VIDEOS_API } from "../utils/constant";
import { setVideos } from "../utils/videosSlice";
import Shimmer from "./Shimar";
import VideoCard, { AdVideoCard } from "./VideoCard";

const VideoContainer = () => {
  const dispatch = useDispatch();
  const getVideos = async () => {
    const data = await fetch(YOUTUBE_VIDEOS_API);
    const json = await data.json();

    dispatch(setVideos(json.items));
  };
  useEffect(() => {
    getVideos();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const videos = useSelector((store) => store.video.videoList);

  if (videos.length === 0) return <Shimmer />;

  return (
    <div className="flex flex-wrap">
      {/* <AdVideoCard info={videos[0]} /> */}
      {videos.map((video) => (
        <Link
          to={
            "/watch?v=" +
            (typeof video.id !== "object" ? video.id : video.id.videoId)
          }
          key={typeof video.id !== "object" ? video.id : video.id.videoId}
        >
          <VideoCard info={video} />
        </Link>
      ))}
    </div>
  );
};

export default VideoContainer;
