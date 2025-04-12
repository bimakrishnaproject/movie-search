import { useQuery } from "@tanstack/react-query";
import { searchMovies } from "../api/movieApi";

export const useSearchMovies = (query: string, enabled: boolean) => {
  return useQuery({
    queryKey: ["movies", query],
    queryFn: () => {
      if (!query.trim()) {
        throw new Error("Query is required");
      }
      return searchMovies(query);
    },
    enabled: enabled && query.trim() !== "",
  });
};
