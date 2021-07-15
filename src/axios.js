import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:5001/clone-718d1/us-central1/api", //api url
});

export default instance;
