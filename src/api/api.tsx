import axios from "axios";
import { IGetMoviesResult } from "../types/type";

const API_KEY = process.env.REACT_APP_API_KEY;

// baseAPi
const baseApi = axios.create({
  baseURL: "https://api.themoviedb.org/3",
  timeout: 1000,
});

export const getMoives = async () => {
  const res = await baseApi.get<IGetMoviesResult>(
    `/movie/now_playing?api_key=${API_KEY}`
  );
  return res;
};
