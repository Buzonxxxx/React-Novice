import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 870cbb4f0df5bf8c592657544aadf21ccf5d0668ea2be573c6af686429210b7c"
  }
});
