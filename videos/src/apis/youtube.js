import axios from "axios";

const KEY = "AIzaSyCza-uD6fB-7qUPLhzVxMTO3k1pamPyiP0";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    key: KEY,
    type: "video"
  }
});
