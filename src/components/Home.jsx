import React, { useState, useEffect } from "react";
import "../css/home.css";
import MovieCard from "./MovieCard";
import Form from "./Form";

const getMoviesData = () => {
  const data = localStorage.getItem("moviesData");
  if (data) {
    return JSON.parse(localStorage.getItem("moviesData"));
  } else {
    return [];
  }
};

const Home = () => {
  const [inputData, setInputData] = useState({
    title: "",
    year: "",
    duration: "",
    genre: "",
    file: "",
    summary: "",
  });
  const [moviesData, setMoviesData] = useState(getMoviesData());

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
          return <MovieCard value={value} key={index} />;
        })}
      </div>
      <Form
        moviesData={moviesData}
        setMoviesData={setMoviesData}
        inputData={inputData}
        setInputData={setInputData}
      />
    </div>
  );
};

export default Home;
