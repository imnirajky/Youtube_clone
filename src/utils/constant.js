const API_KEY = "AIzaSyCT1rX3eeIwAmcg28rouD5ZBt0SpuuOP9E";
export const YOUTUBE_VIDEOS_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=50&key=" + API_KEY;
export const VIDEO_BY_ID = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&key=" + API_KEY + "&id=";
export const SEARCH_SUGGESTION_API = "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q=";
//https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=7&type=video&key=AIzaSyCT1rX3eeIwAmcg28rouD5ZBt0SpuuOP9E&q=modi  --- Search result query=>video related to query