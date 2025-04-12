import React from "react";
import { Movie } from "../../types/movie";
import MovieCard from "../MoviewCard/MovieCard";

interface Props {
  movies: Movie[];
  query: string;
  onSelect: (id: string) => void;
}

const MovieList: React.FC<Props> = ({ movies, query, onSelect }) => {
  if (movies.length === 0 && query !== "") {
    return <p className="text-gray-400">No results found.</p>;
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
      {movies.map((movie) => (
        <MovieCard key={movie.imdbID} movie={movie} onClick={onSelect} />
      ))}
    </div>
  );
};

export default MovieList;
