const GOOGLE_API_KEY = "AIzaSyB6IZX_e0qatbDLvqr5bzhhjNj-kuc6QpE";

export const YOUTUBE_VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=50&regionCode=IN&key=" +
  GOOGLE_API_KEY;

export const YOUTUBE_VIDEOS_CATEGORY_API =
  "https://youtube.googleapis.com/youtube/v3/videoCategories?part=snippet&hl=en&regionCode=IN&key=" +
  GOOGLE_API_KEY;

// https://youtube.googleapis.com/youtube/v3/videoCategories?part=snippet&hl=es&regionCode=IN&key=AIzaSyB6IZX_e0qatbDLvqr5bzhhjNj-kuc6QpE

// https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=UCBR8-60-B28hp2BmDPdntcQ&key=AIzaSyB6IZX_e0qatbDLvqr5bzhhjNj-kuc6QpE

// https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=javascript&key=AIzaSyB6IZX_e0qatbDLvqr5bzhhjNj-kuc6QpE
