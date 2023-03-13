import React from "react";
import { nFormatter, timeSince } from "../utils/helpers";

const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  const viewCount = nFormatter(statistics?.viewCount);
  const time = timeSince(snippet?.publishTime);

  return (
    <div className="m-2 w-72 h-72">
      <img className="rounded-lg" src={thumbnails.medium.url} alt="thumbnail" />
      <ul className="p-2 ">
        <li
          className="font-bold line-clamp-2"
          data-te-toggle="tooltip"
          title={title}
        >
          {title}
        </li>
        <li className="py-2 text-gray-700">{channelTitle}</li>
        <li className="text-sm text-gray-600">
          {viewCount} &middot; {time}
        </li>
      </ul>
    </div>
  );
};

export default VideoCard;
