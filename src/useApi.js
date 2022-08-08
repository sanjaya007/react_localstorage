import { useState, useEffect } from "react";

const SEARCH_API_URL = `https://www.omdbapi.com/?apikey=${process.env.REACT_APP_API_KEY}`;

const useApi = (type, query) => {
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState(null);
  const [isError, setIsError] = useState({
    show: false,
    msg: "",
  });

  const getMovies = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();

      if (data.Response === "True") {
        setIsLoading(false);
        if (type === "title") {
          setMovies(data.Search);
        } else {
          setMovies(data);
        }
        setIsError({ show: false, msg: "" });
      } else {
        setIsLoading(true);
        setIsError({ show: true, msg: data.Error });
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    let timerOut = setTimeout(() => {
      getMovies(`${SEARCH_API_URL}&s=${query}`);
    }, 500);

    return () => clearTimeout(timerOut);
  }, [query]);

  return { isLoading, movies, isError };
};

export default useApi;
