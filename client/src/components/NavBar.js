import React from "react";
import styled from "styled-components";

const NavBar = () => {
  return (
    <Div>
      <a href="">navBar</a>
    </Div>
  );
};

const Div = styled.div`
  display: flex;
  flex-direction: column-reverse;
  align-content: flex-end;
  /* padding: 11px; */
  font-family: Arial, Helvetica, sans-serif;
  font-size: 21px;
`;
export default NavBar;
