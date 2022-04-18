import React, { useEffect } from "react";
import styled from "styled-components";
// import SignIn from "./SignIn";

const LandingPage = () => {
  useEffect(() => {
    fetch(`/api/movie/popular`)
      .then((response) => response.json())
      .then((response) => {
        console.log("WhereAreyou?", response);
      });
  }, []);

  return (
    <>
      <Wrapper>
        <Div>LandingPage</Div>
      </Wrapper>
    </>
  );
};

const Div = styled.div``;
const Wrapper = styled.div``;

export default LandingPage;
