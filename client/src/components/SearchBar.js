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

  return (
    <Wrapper>
      <SearchArea />
      <Input
        type="text"
        placeholder="Looking for something?!"
        onChange={handleChange}
        onSubmit={handleSubmit}
        // value={}
      />
      <Submit>Search</Submit>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* border: lightblue solid 10px; */
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
