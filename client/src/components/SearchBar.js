import React, { useContext } from "react";
import { useState, useEffect } from "react";
import styled from "styled-components";
import { AppContext } from "../AppContext";

const SearchBar = () => {
  const { AppContext } = useContext(AppContext);
  const [searchInput, setSearchInput] = useState("");
  const [data, setData] = useState();

  useEffect(() => {
    fetch(`api/movie/popular/:search`)
      .then((res) => res.json)
      .then((data) => {
        setData(data.results);
        console.log("results", data.results);
      });
  }, []);

  // console.log("State", state);
  // console.log("SearchInput", searchInput);

  const handleChange = (ev) => {
    ev.preventDefault();
    setSearchInput(ev.target.value);
    if (searchInput.length > 0) {
      data.results.filter((movie) => {
        return data.results.movie.match(searchInput);
      });
    }
    // movies: [], setSearchInput({ searchTerm: "" });
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    // setState({ movies: [...results] });
  };
  return (
    <Wrapper>
      <SearchArea />
      <Input
        type="text"
        placeholder="Looking for something?!"
        onChange={handleChange}
        onSubmit={handleSubmit}
        value={searchInput}
      />
      <Submit>Search</Submit>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 11px;
`;
const SearchArea = styled.div`
  border: none;
`;
const Input = styled.input`
  border: hsl(245, 74%, 20%) 1px solid;
  margin: 5px;
  padding: 3px;
  border-radius: 6px;
  height: 21px;
  width: 222px;
`;
const Submit = styled.button`
  text-decoration: none;
  font-size: 11px;
  letter-spacing: 1px;
  margin: 3px;
  border-radius: 5px;
  width: 61px;
  height: 25px;
  border: 1px solid black;
`;
export default SearchBar;
