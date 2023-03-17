import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { YOUTUBE_VIDEOS_SEARCH_API } from "../utils/constant";
import SearchVideoCard from "./SearchVideoCard";
import Shimmer from "./Shimar";

const SearchResults = () => {
  const [searchParams] = useSearchParams();
  const [videos, setVideos] = useState([]);

  const getSearchData = async (searchParams) => {
    let data = await fetch(
      YOUTUBE_VIDEOS_SEARCH_API + "&q=" + searchParams.get("search_query")
    );
    data = await data.json();
    console.log(data);
    setVideos(() => setVideos(data?.items));
  };

  useEffect(() => {
    getSearchData(searchParams);
  }, [searchParams]);

  if (videos?.length === 0) return <Shimmer />;

  return (
    <div className="m-2 p-2">
      {videos?.length > 0 &&
        videos.map((video) => (
          <Link to={"/watch?v=" + video.id.videoId} key={video?.id?.videoId}>
            <SearchVideoCard info={video} />
          </Link>
        ))}
    </div>
  );
};

export default SearchResults;
