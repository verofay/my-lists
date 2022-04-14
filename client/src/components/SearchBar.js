import React from "react";
import { useState } from "react";
import styled from "styled-components";

const SearchBar = () => {
  const [searchInput, setSearchInput] = useState("");
  const [state, setState] = useState("");

  // console.log("State", state);
  console.log("SearchInput", searchInput);

  const handleSubmit = (ev) => {
    ev.preventDefault();
   
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
