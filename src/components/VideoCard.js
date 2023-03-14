import React from "react";
import { formatDuration, nFormatter, timeSince } from "../utils/helpers";

const VideoCard = ({ info }) => {
  const { snippet, statistics, contentDetails } = info;
  const { channelTitle, title, thumbnails } = snippet;
  const viewCount = nFormatter(statistics?.viewCount);
  const time = timeSince(snippet?.publishTime);

  return (
    <div className="m-2 w-72 h-72">
      <div className="relative">
        <img
          className="rounded-lg"
          src={thumbnails.medium.url}
          alt="thumbnail"
        />
        {contentDetails && (
          <span className="absolute px-1 bottom-0 right-0 mr-2 mb-1 bg-black text-white text-sm rounded-md">
            {formatDuration(contentDetails?.duration)}
          </span>
        )}
      </div>

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

// Higher Order Component
export const AdVideoCard = ({ info }) => {
  return (
    <div className="border p-1 m-1 border-red-900">
      <VideoCard info={info} />
    </div>
  );
};

export default VideoCard;
