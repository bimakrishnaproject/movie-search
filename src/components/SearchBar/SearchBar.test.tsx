import { render, screen, fireEvent } from "@testing-library/react";
import SearchBar from "./SearchBar";

describe("SearchBar", () => {
  it("renders input and button", () => {
    render(
      <SearchBar
        query=""
        setQuery={() => {}}
        onSearch={() => {}}
        loading={false}
      />
    );
    expect(screen.getByPlaceholderText(/search movie/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /search/i })).toBeInTheDocument();
  });

  it("calls setQuery on input change", () => {
    const mockSetQuery = jest.fn();
    render(
      <SearchBar
        query=""
        setQuery={mockSetQuery}
        onSearch={() => {}}
        loading={false}
      />
    );
    fireEvent.change(screen.getByPlaceholderText(/search movie/i), {
      target: { value: "Batman" },
    });
    expect(mockSetQuery).toHaveBeenCalledWith("Batman");
  });

  it("calls onSearch when button clicked", () => {
    const mockSearch = jest.fn();
    render(
      <SearchBar
        query="batman"
        setQuery={() => {}}
        onSearch={mockSearch}
        loading={false}
      />
    );
    fireEvent.click(screen.getByRole("button", { name: /search/i }));
    expect(mockSearch).toHaveBeenCalled();
  });
});
