export const API_KEY = "AIzaSyCXr9MfzAyWiYk_mu7wEkB6nitFSMjJ5xQ";
// export const NEW_API_KEY = "&key=" + API_KEY;
export const VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=40&regionCode=IN&key=" +
  API_KEY;
export const SEARCH_API =
  "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&key=AIzaSyCXr9MfzAyWiYk_mu7wEkB6nitFSMjJ5xQ&q=";

export const CHANNELINFO =
  "https://www.googleapis.com/youtube/v3/search?key=AIzaSyAFL5XCUWp-Z-D4o6VHKxUNestuASWcofw&channelId=UC_Q-YjEXDN0ufkU4AoWhU1g&part=snippet&id&order=date&maxResults=20";

export const RECOMMENDED_VIDEOS_API =
  "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&maxResults=10&regionCode=IN&key=AIzaSyAFL5XCUWp-Z-D4o6VHKxUNestuASWcofw";
