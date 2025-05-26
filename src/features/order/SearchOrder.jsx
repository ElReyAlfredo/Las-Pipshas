import { useState } from "react";
import { useNavigate } from "react-router-dom";

function SearchOrder() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    if (!query) return;
    navigate(`/order/${query}`);
    setQuery("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        placeholder="Search order #"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg w-64 md:w-80 
                       focus:outline-none focus:ring-2 focus:ring-orange-300 focus:bg-white
                       placeholder-gray-500 text-gray-700 shadow-sm"
      />
    </form>
  );
}

export default SearchOrder;
