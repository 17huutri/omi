import axios from "axios";
import { APIURL } from "./constant_api";

const axiosClient = axios.create({
  baseURL: APIURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosClient;