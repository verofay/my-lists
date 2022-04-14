import React, { useEffect } from "react";
import styled, { ThemeConsumer } from "styled-components";
import { API_KEY, API_URL } from "../Config";

const LandingPage = () => {
  useEffect(() => {
    fetch(`${API_URL}movie/popular?api_key=${API_KEY}&language=en-US&page=1`)
      .then((response) => response.json())
      .then((response) => {
        console.log(response);
      });
  }, []);
  
  return <>Landing Page</>;
};

export default LandingPage;
