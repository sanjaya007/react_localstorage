import React from "react";
import { Button } from "@mui/material";

const MovieCard = ({ value }) => {
  return (
    <div className="movie-card">
      <div className="img-box">
        <img src={value.file} alt="movie" />
      </div>
      <div className="info-box">
        <div className="title">
          <h1>{value.title}</h1>
          <p>
            {value.year} | {value.duration} | {value.genre}
          </p>
        </div>
        <div className="summary">
          <h1>Summary</h1>
          <p>{value.summary}</p>
        </div>
        <div className="watch-btn">
          <Button variant="contained">Watch Now</Button>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
