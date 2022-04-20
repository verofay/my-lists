import React, { useEffect, useState } from "react";
import { createContext } from "react";

export const AppContext = createContext(null);

export const AppProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);

  //   fetching all movies    //    data.data.results
  useEffect(() => {
    fetch(`/api/movie/popular`)
      .then((res) => res.json())
      .then((data) => {
        if (data.data.results > 0) {
          return setMovies(data.data.results);
        }
        console.log("Movies", movies);
        console.log("dTdTresults", data.data.results);
      });
  }, []);

  return (
    <>
      <AppContext.Provider value={{ movies, setMovies }}>
        {children}
      </AppContext.Provider>
    </>
  );
};

export default AppProvider;
