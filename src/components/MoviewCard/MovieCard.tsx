import React from "react";
import { Movie } from "../../types/movie";

interface Props {
  movie: Movie;
  onClick: (id: string) => void;
}

const MovieCard: React.FC<Props> = ({ movie, onClick }) => (
  <div
    onClick={() => onClick(movie.imdbID)}
    className="bg-gray-800 text-white rounded-xl overflow-hidden shadow-md cursor-pointer hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105"
  >
    <img
      src={movie.Poster !== "N/A" ? movie.Poster : "/no-image.png"}
      alt={movie.Title}
      className="w-full h-56 object-cover"
    />
    <div className="p-4">
      <h2 className="text-xl font-medium text-gray-200 truncate">
        {movie.Title}
      </h2>
      <p className="text-sm text-gray-400">{movie.Year}</p>
    </div>
  </div>
);

export default MovieCard;
