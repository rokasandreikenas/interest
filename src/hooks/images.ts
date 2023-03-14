import { PixabayImage } from "../types/image";
import { fetchImages } from "../api/images";
import { useQuery } from "@tanstack/react-query";

const IMAGES = "IMAGES";

export const useImages = () => {
  return useQuery<PixabayImage[], Error>([IMAGES], fetchImages);
};
