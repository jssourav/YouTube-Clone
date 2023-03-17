import React from "react";
import { timeSince } from "../utils/helpers";

const SearchVideoCard = ({ info }) => {
  const { snippet } = info;
  const { channelTitle, title, thumbnails } = snippet;
  const time = timeSince(snippet?.publishTime);
  return (
    <div className="flex my-4">
      <img
        src={thumbnails?.medium?.url}
        alt="thumbnail"
        className="rounded-lg shadow-lg"
      />
      <div className="m-2">
        <p className="font-bold text-xl py-1">{title}</p>
        <p className="text-sm py-1">{time}</p>
        <p className="py-1">{channelTitle}</p>
        <p className="text-sm py-1">{snippet?.description}</p>
      </div>
    </div>
  );
};

export default SearchVideoCard;
