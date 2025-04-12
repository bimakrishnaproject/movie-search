import { useQuery } from "@tanstack/react-query";
import { getMovieDetail } from "../api/movieApi";

export const useMovieDetail = (id: string | null) => {
  return useQuery({
    queryKey: ["movie-detail", id],
    queryFn: () => {
      if (!id) {
        throw new Error("ID is required");
      }
      return getMovieDetail(id);
    },
    enabled: !!id,
  });
};
