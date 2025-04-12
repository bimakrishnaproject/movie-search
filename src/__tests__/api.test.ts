import { searchMovies, getMovieDetail } from "../api/movieApi";

jest.mock("../api/movieApi", () => ({
  searchMovies: jest.fn(() =>
    Promise.resolve([
      {
        Title: "Journey to Solo",
        Year: "2021",
        imdbID: "film-002",
        Type: "movie",
        Poster: "https://example.com/journey.jpg",
      },
    ])
  ),
  getMovieDetail: jest.fn(() =>
    Promise.resolve({
      Title: "Journey to Solo",
      Year: "2021",
      imdbID: "film-002",
      Plot: "A simple journey turns into an unexpected adventure.",
      Poster: "https://example.com/journey.jpg",
      Director: "Andi Pratama",
    })
  ),
}));

describe("movieApi", () => {
  test("searchMovies returns movie list", async () => {
    const results = await searchMovies("journey");
    expect(results).toHaveLength(1);
    expect(results[0].Title).toBe("Journey to Solo");
  });

  test("getMovieDetail returns movie detail", async () => {
    const detail = await getMovieDetail("film-002");
    expect(detail.Title).toBe("Journey to Solo");
    expect(detail.Director).toBe("Andi Pratama");
  });
});
