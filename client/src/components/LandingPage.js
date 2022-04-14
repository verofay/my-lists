import React, { useEffect } from "react";
import styled, { ThemeConsumer } from "styled-components";

const LandingPage = () => {
  useEffect(() => {
    fetch(`/api/popular-movie`)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
      });
  }, []);

  return <>Landing Page</>;
};

export default LandingPage;
