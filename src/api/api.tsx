import axios from "axios";

const API_KEY = process.env.REACT_APP_API_KEY;

const baseApi = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  timeout: 1000,
});

export const getMoives = async () => {
  const res = await baseApi.get(`/movie/now_playing?api_key=${API_KEY}`);
  return res;
};
