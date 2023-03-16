import { PixabayImage } from "../types/image";
import axios from "axios";

const URL = "https://pixabay.com/api";
const KEY = "34412143-fd2bd0cd7c22ba504a1f1ce4a";

export const fetchImages = (page: number): Promise<PixabayImage[]> => {
  return axios
    .get(URL, { params: { key: KEY, page } })
    .then((response) => response.data.hits);
};
