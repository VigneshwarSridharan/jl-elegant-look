import { API_URL } from "@/constants";
import axios from "axios";

const APIService = axios.create({
  baseURL: API_URL,
});

export default APIService;
