import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "5b2af156e317413b9e1dedefb656b80b",
  },
});
