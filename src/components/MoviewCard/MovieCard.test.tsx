import { render, screen, fireEvent } from "@testing-library/react";
import MovieCard from "./MovieCard";
import { Movie } from "../../types/movie";

const dummyMovie: Movie = {
  imdbID: "1",
  Title: "Inception",
  Year: "2010",
  Poster: "https://image.jpg",
};

describe("MovieCard", () => {
  it("renders movie title and year", () => {
    render(<MovieCard movie={dummyMovie} onClick={() => {}} />);
    expect(screen.getByText("Inception")).toBeInTheDocument();
    expect(screen.getByText("2010")).toBeInTheDocument();
  });

  it("calls onClick when clicked", () => {
    const mockSelect = jest.fn();
    render(<MovieCard movie={dummyMovie} onClick={mockSelect} />);
    fireEvent.click(screen.getByText("Inception"));
    expect(mockSelect).toHaveBeenCalledWith("1");
  });
});
