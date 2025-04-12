import { useEffect, useState } from "react";
import MovieDetail from "./components/MovieDetail/MovieDetail";
import MovieList from "./components/MovieList/MovieList";
import SearchBar from "./components/SearchBar/SearchBar";
import { useMovieDetail } from "./hooks/useMovieDetail";
import { useSearchMovies } from "./hooks/useSearchMovies";
import "./index.css";

function App() {
  const [query, setQuery] = useState("");
  const [submittedQuery, setSubmittedQuery] = useState("");
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [showError, setShowError] = useState(false);

  const {
    data: movies,
    isLoading,
    error,
  } = useSearchMovies(submittedQuery, submittedQuery !== "");
  const { data: selectedMovie } = useMovieDetail(selectedId);

  const onHandleSearch = () => {
    setSubmittedQuery(query);
    setSelectedId(null);
  };

  useEffect(() => {
    if (error) {
      setShowError(true);
      const timeout = setTimeout(() => {
        setShowError(false);
      }, 2000);
      return () => clearTimeout(timeout);
    }
  }, [error]);

  return (
    <div className="min-h-screen bg-gray-900 text-white p-6">
      <h1 className="text-3xl font-bold mb-4">Movie Search</h1>

      <SearchBar
        query={query}
        setQuery={setQuery}
        onSearch={onHandleSearch}
        loading={isLoading}
      />

      {error && showError && (
        <div className="bg-red-100 text-red-700 p-3 rounded flex justify-between items-center mb-4">
          <span>{(error as Error).message}</span>
        </div>
      )}

      {selectedMovie ? (
        <MovieDetail movie={selectedMovie} onBack={() => setSelectedId(null)} />
      ) : (
        <>
          {!isLoading ? (
            movies?.length > 0 ? (
              <MovieList
                movies={movies || []}
                query={submittedQuery}
                onSelect={(id) => setSelectedId(id)}
              />
            ) : (
              <div className="text-center text-gray-400 my-8">
                <p>Nothing to show here yet. Start by searching for a movie.</p>
              </div>
            )
          ) : (
            <div className="text-center text-gray-400 my-8">
              <p>Loading...</p>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default App;
