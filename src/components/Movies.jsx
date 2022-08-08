import React from "react";
import ListBox from "./ListBox";
import Search from "./Search";
import "../css/movies.css";
import { useGlobalContext } from "../context";

const Movies = () => {
  const { movies, isLoading } = useGlobalContext();

  return (
    <div className="movie-list-container">
      <div className="head-title flex-css">
        <h1>Search Movies</h1>
      </div>
      <Search />

      {isLoading ? (
        <div className="loading-box flex-css">
          <p>Loading...</p>
        </div>
      ) : (
        <div className="list-container flex-top-row-start-wrap">
          {movies.map((value, index) => {
            return <ListBox value={value} key={value.imdbID} />;
          })}
        </div>
      )}
    </div>
  );
};

export default Movies;
