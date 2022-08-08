import React from "react";
import { NavLink } from "react-router-dom";

const ListBox = ({ value }) => {
  return (
    <NavLink
      to={`/movies/${value.imdbID}`}
      key={value.imdbID}
      className="list-box"
    >
      <div className="box">
        <div
          className={`img-box flex-css ${
            value.Poster === "N/A" ? "contain-img" : ""
          } `}
        >
          <img
            src={
              value.Poster === "N/A"
                ? "https://img.icons8.com/bubbles/100/000000/no-image.png"
                : value.Poster
            }
            alt={value.Title}
          />
        </div>
        <div className="info">
          <h1 title={value.Title}>{value.Title}</h1>
        </div>
      </div>
    </NavLink>
  );
};

export default ListBox;
