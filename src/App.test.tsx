import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import App from "./App";
import * as movieApi from "./api/movieApi";

jest.mock("./api/movieApi");

describe("App", () => {
  const queryClient = new QueryClient();

  it("renders search results when a movie is searched", async () => {
    jest.spyOn(movieApi, "searchMovies").mockResolvedValue([
      {
        imdbID: "film-001",
        Title: "The Coffee Chronicles",
        Year: "2022",
        Poster: "https://via.placeholder.com/150",
      },
    ]);

    render(
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    );

    fireEvent.change(screen.getByPlaceholderText(/search movie/i), {
      target: { value: "coffee" },
    });

    fireEvent.click(screen.getByRole("button", { name: /search/i }));

    await waitFor(() => {
      expect(screen.getByText("The Coffee Chronicles")).toBeInTheDocument();
    });
  });
});
