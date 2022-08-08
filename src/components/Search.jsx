import React from "react";
import { useGlobalContext } from "../context";

const Search = () => {
  const { isError, query, setQuery } = useGlobalContext();
  return (
    <>
      <div className="search-box flex-css">
        <input
          type="text"
          placeholder="Search..."
          value={query.value}
          onChange={(e) => setQuery({ type: "title", value: e.target.value })}
        />
      </div>
      <div className="error-box flex-css">
        <p>{isError.show ? isError.msg : ""}</p>
      </div>
    </>
  );
};

export default Search;
