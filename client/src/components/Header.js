import React from "react";
import styled from "styled-components";
import SearchBar from "./SearchBar";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <Wrapper>
      <Div>
        <a href="">MySpace</a>
        <NavBar />
        <SearchBar />
      </Div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  /* border: blue solid 3px; */
`;

const Div = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  margin: 11px;
  padding: 11px;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 21px;
  height: 200px;
  width: auto;
  background-color: hsl(206, 98%, 88%);
`;

export default Header;
