import axios from "axios";

const instance = axios.create({
  baseURL: "https://68a597872a3deed2960e07fa.mockapi.io/",
});

export default instance;
