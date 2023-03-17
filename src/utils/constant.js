const GOOGLE_API_KEY = "AIzaSyBEaFRhXSPq3FsBXGy8alEHf1uomIxwZBA";
const BASE_URL = "https://youtube.googleapis.com/youtube/v3/";

export const YOUTUBE_VIDEOS_API =
  BASE_URL +
  "videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  GOOGLE_API_KEY;

export const YOUTUBE_VIDEOS_CATEGORY_API =
  BASE_URL +
  "videoCategories?part=snippet&hl=en&regionCode=IN&key=" +
  GOOGLE_API_KEY;

export const YOUTUBE_VIDEOS_SEARCH_API =
  BASE_URL +
  "search?part=snippet&maxResults=25&type=video&key=" +
  GOOGLE_API_KEY;

export const YOUTUBE_SEARCH_API =
  "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";

// https://youtube.googleapis.com/youtube/v3/videoCategories?part=snippet&hl=es&regionCode=IN&key=AIzaSyB6IZX_e0qatbDLvqr5bzhhjNj-kuc6QpE

// https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=UCBR8-60-B28hp2BmDPdntcQ&key=AIzaSyB6IZX_e0qatbDLvqr5bzhhjNj-kuc6QpE

// https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=javascript&key=AIzaSyB6IZX_e0qatbDLvqr5bzhhjNj-kuc6QpE

// https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&pageToken=CDIQAA&regionCode=US&key=AIzaSyDu3_11kpnJO_TTIUUbC7rHlSf4_0wSV8o
