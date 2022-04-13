import React from "react";
import styled from "styled-components";
import SearchBar from "./SearchBar";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <Wrapper>
      <NavBar />
      <SearchBar />
      <Div>Header</Div>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  border: blue solid 3px;
`;

const Div = styled.div`
  height: 200px;
  width: auto;
  background-color: hsl(47, 22%, 76%);
`;

export default Header;
