import React from "react";
import "../css/view.css";
import { NavLink, useParams } from "react-router-dom";
import useApi from "../useApi";

const ViewMovie = () => {
  const { id } = useParams();
  const { isLoading, movies, isError } = useApi("id", `&i=${id}`);

  if (isError.show) {
    return (
      <div className="view-wrapper flex-css">
        <div className="view-loading-box">
          <h1>Invalid Link !</h1>
        </div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="view-wrapper flex-css">
        <div className="view-loading-box">
          <h1>Loading...</h1>
        </div>
      </div>
    );
  }

  return (
    <div className="view-wrapper flex-css">
      <div className="view-box flex-css-row-start">
        <div className="left-box">
          <div
            className={`img-box flex-css ${
              movies.Poster === "N/A" ? "contain-img" : ""
            } `}
          >
            <img
              src={
                movies.Poster === "N/A"
                  ? "https://img.icons8.com/bubbles/100/000000/no-image.png"
                  : movies.Poster
              }
              alt={movies.Title}
            />
          </div>
        </div>
        <div className="right-box">
          <h1>{movies.Title}</h1>
          <p>{movies.Released}</p>
          <p>{movies.Genre}</p>
          <p>{movies.imdbRating} / 10</p>
          <p>{movies.Country}</p>
          <p className="small-p">Cast: {movies.Actors}</p>
          <NavLink to={"/movies"} className="back-btn">
            Go Back
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default ViewMovie;
