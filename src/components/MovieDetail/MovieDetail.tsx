import React from "react";
import { Movie } from "../../types/movie";

interface Props {
  movie: Movie;
  onBack: () => void;
}

interface ContentProps {
  label: string;
  value?: string;
}

const Content: React.FC<ContentProps> = ({ label, value }) => (
  <p>
    <strong>{label}:</strong> {value || "-"}
  </p>
);

const MovieDetail: React.FC<Props> = ({ movie, onBack }) => {
  const posterSrc = movie.Poster !== "N/A" ? movie.Poster : "/no-image.png";

  return (
    <div className="bg-white text-black rounded p-6 shadow">
      <button className="mb-4 text-blue-500 underline" onClick={onBack}>
        ← Back to results
      </button>
      <div className="flex flex-col md:flex-row gap-4">
        <img
          src={posterSrc}
          alt={movie.Title}
          className="w-full md:w-64 object-cover rounded"
        />
        <div>
          <h2 className="text-2xl font-bold mb-2">{movie.Title}</h2>
          <Content label="Year" value={movie.Year} />
          <Content label="Genre" value={movie.Genre} />
          <Content label="Director" value={movie.Director} />
          <Content label="Plot" value={movie.Plot} />
          <Content label="Actors" value={movie.Actors} />
          <Content label="IMDB Rating" value={movie.imdbRating} />
        </div>
      </div>
    </div>
  );
};

export default MovieDetail;
