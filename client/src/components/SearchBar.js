import React from "react";
import { useState } from "react";
import styled from "styled-components";

// const API_KEY = `${process.env.REACT_API_APP_KEY}`;

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState("");
  const [state, setState] = useState("");

  // console.log("State", state);
  console.log("SearchInput", searchInput);

  const handleSubmit = (ev) => {
    ev.preventDefault();
    fetch(
      `https://api.themoviedb.org/3/list/{list_id}?api_key=614fb9d9d416234b14abdd8be76a4451&language=en-US`
    )
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
        setState({ movies: [...data.results] });
      });
  };

  const handleChange = (ev) => {
    ev.preventDefault();
    setSearchInput({ searchTerm: ev.target.value });
  };
  //if () {} ---> tbd

  return (
    <Wrapper>
      <SearchArea />
      <input
        type="text"
        placeholder="Search here"
        onChange={handleChange}
        onSubmit={handleSubmit}
        // value={}
      />

      <Submit>Button</Submit>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  border: lightblue solid 10px;
  font-family: Arial, Helvetica, sans-serif;
  /* font-size: 21px; */
`;
const SearchArea = styled.div`
  border: yellow 2px solid;
`;
const Submit = styled.button``;
export default SearchBar;
