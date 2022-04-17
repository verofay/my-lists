import React, { useEffect } from "react";
import styled, { ThemeConsumer } from "styled-components";
// import SignIn from "./SignIn";

const LandingPage = () => {
  useEffect(() => {
    fetch(`/api/popular-movie`)
      .then((response) => response.json())
      .then((response) => {
        console.log("WTF", response);
      });
  }, []);

  return <Div>landingPage</Div>;
};

const Div = styled.div``;

export default LandingPage;
