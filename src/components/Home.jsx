import React, { useState, useEffect } from "react";
import "../css/home.css";
import "../css/light.css";
import MovieCard from "./MovieCard";
import Form from "./Form";
import Yframe from "./Yframe";

const getMoviesData = () => {
  const data = localStorage.getItem("moviesData");
  if (data) {
    return JSON.parse(localStorage.getItem("moviesData"));
  } else {
    return [];
  }
};

const Home = () => {
  const [moviesData, setMoviesData] = useState(getMoviesData());
  const [currentId, setCurrentId] = useState(null);
  const [frame, setFrame] = useState({
    frame: false,
    url: null,
  });

  useEffect(() => {
    localStorage.setItem("moviesData", JSON.stringify(moviesData));
  }, [moviesData]);

  return (
    <div className="home-container flex-top-row-sb">
      <div className="movie-container">
        {moviesData.length < 1 && (
          <div className="no-data flex-css">
            <h1>No Data Found !!</h1>
          </div>
        )}
        {moviesData.map((value, index) => {
          return (
            <MovieCard
              value={value}
              key={index}
              moviesData={moviesData}
              setMoviesData={setMoviesData}
              setCurrentId={setCurrentId}
              setFrame={setFrame}
            />
          );
        })}
      </div>
      <Form
        moviesData={moviesData}
        setMoviesData={setMoviesData}
        currentId={currentId}
        setCurrentId={setCurrentId}
      />
      <Yframe frame={frame} setFrame={setFrame} />
    </div>
  );
};

export default Home;
