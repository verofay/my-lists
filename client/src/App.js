import React from "react";
import {
  BrowserRouter,
  BrowserRouter as Router,
  Route,
  Switch,
} from "react-router-dom";
import styled from "styled-components";
import GlobalStyles from "./components/GlobalStyles";
import Header from "./components/Header";
import LandingPage from "./components/LandingPage";
import SignIn from "./components/SignIn";

// const api_key = "614fb9d9d416234b14abdd8be76a4451";
// console.log("Hello", api_key);

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Header />
      <LandingPage />
      <Switch>
        <Div>
          <Route to="/">home</Route>
          <SignIn />
        </Div>

        <Route to="/users/signIn">signin</Route>
        <Route to="/users/profile">profile</Route>
        <Route to="/users/lists">lists</Route>
        <Route to="/users/:id">infos?</Route>
      </Switch>
    </BrowserRouter>
  );
};

const Div = styled.div`
  background-color: hsl(47, 17%, 84%);
  height: 100vh;
  width: auto;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 21px;
  font-weight: bold;
`;

export default App;
