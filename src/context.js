import React, { useState } from "react";
import { useContext } from "react";
import useApi from "./useApi";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [query, setQuery] = useState({
    type: "title",
    value: "hacker",
  });
  const { isLoading, movies, isError } = useApi(
    query.type,
    `&s=${query.value}`
  );
  return (
    <AppContext.Provider
      value={{ isLoading, movies, isError, query, setQuery }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
