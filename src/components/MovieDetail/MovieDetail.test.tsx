import { render, screen, fireEvent } from "@testing-library/react";
import MovieDetail from "./MovieDetail";
import { Movie } from "../../types/movie";

const movie: Movie = {
  imdbID: "99",
  Title: "Langit Senja",
  Year: "2022",
  Poster: "https://example.com/langit.jpg",
  Genre: "Drama",
  Director: "Dina Kartika",
  Plot: "Sebuah kisah sederhana tentang kehilangan dan harapan.",
  Actors: "Rangga, Cinta",
  imdbRating: "7.5",
};

describe("MovieDetail", () => {
  it("shows the movie information", () => {
    render(<MovieDetail movie={movie} onBack={() => {}} />);
    expect(screen.getByText("Langit Senja")).toBeInTheDocument();
    expect(screen.getByText("Dina Kartika")).toBeInTheDocument();
    expect(screen.getByText(/kehilangan dan harapan/i)).toBeInTheDocument();
  });

  it("triggers onBack when back link is clicked", () => {
    const handleBack = jest.fn();
    render(<MovieDetail movie={movie} onBack={handleBack} />);
    fireEvent.click(screen.getByText(/← back to results/i));
    expect(handleBack).toHaveBeenCalled();
  });
});
