import React from "react";
import { nFormatter } from "../utils/helpers";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  const viewCount = nFormatter(statistics?.viewCount);

  return (
    <div className="m-2 w-72 h-72">
      <img className="rounded-lg" src={thumbnails.medium.url} alt="thumbnail" />
      <ul className="p-2 ">
        <li className="font-bold line-clamp-2">{title}</li>
        <li className="py-2">{channelTitle}</li>
        <li>{viewCount} views</li>
      </ul>
    </div>
  );
};

export default VideoCard;
