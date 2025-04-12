import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import MovieList from "./MovieList";
import { Movie } from "../../types/movie";

const mockMovies: Movie[] = [
  {
    imdbID: "1",
    Title: "Batman Begins",
    Year: "2005",
    Poster: "https://via.placeholder.com/150",
    Type: "movie",
  },
  {
    imdbID: "2",
    Title: "The Dark Knight",
    Year: "2008",
    Poster: "https://via.placeholder.com/150",
    Type: "movie",
  },
];

describe("MovieList", () => {
  it("should display movie titles when a list of movies is passed", () => {
    render(
      <MovieList movies={mockMovies} query="batman" onSelect={() => {}} />
    );
    expect(screen.getByText("Batman Begins")).toBeInTheDocument();
    expect(screen.getByText("The Dark Knight")).toBeInTheDocument();
  });

  it("should show a message when no movies are found", () => {
    render(<MovieList movies={[]} query="batman" onSelect={() => {}} />);
    expect(screen.getByText("No results found.")).toBeInTheDocument();
  });

  it("should call the onSelect function when a movie is clicked", () => {
    const mockSelect = jest.fn();
    render(
      <MovieList movies={mockMovies} query="batman" onSelect={mockSelect} />
    );
    const batmanCard = screen.getByText("Batman Begins");
    fireEvent.click(batmanCard);
    expect(mockSelect).toHaveBeenCalledWith("1");
  });
});
