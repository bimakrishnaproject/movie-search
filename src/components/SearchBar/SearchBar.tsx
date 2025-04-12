import React from "react";

interface Props {
  query: string;
  loading: boolean;
  setQuery: (value: string) => void;
  onSearch: () => void;
}

const SearchBar: React.FC<Props> = ({ query, loading, setQuery, onSearch }) => {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      onSearch();
    }
  };

  return (
    <div className="flex gap-2 mb-4">
      <input
        type="text"
        placeholder="Search movie..."
        className="p-2 rounded text-black w-full"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <button
        className="bg-blue-500 px-4 py-2 rounded hover:bg-blue-600 disabled:opacity-50"
        onClick={onSearch}
        disabled={loading}
      >
        Search
      </button>
    </div>
  );
};

export default SearchBar;
