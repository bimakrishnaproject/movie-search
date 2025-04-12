const API_KEY = "f8f40573";
const BASE_URL = "https://www.omdbapi.com/";

export const searchMovies = async (query: string) => {
  const res = await fetch(`${BASE_URL}?apikey=${API_KEY}&s=${query}`);
  const data = await res.json();
  if (data.Response === "True") return data.Search;
  throw new Error(data.Error || "No results found");
};

export const getMovieDetail = async (id: string) => {
  const res = await fetch(`${BASE_URL}?apikey=${API_KEY}&i=${id}`);
  const data = await res.json();
  if (data.Response === "True") return data;
  throw new Error("Failed to fetch movie detail");
};
