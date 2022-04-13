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
import SignIn from "./components/SignIn";

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Switch>
        <Header />
        <Route to="/">home</Route>
        <Route to="/signIn">signin</Route>
      </Switch>
    </BrowserRouter>
  );
};

const Div = styled.div`
  font-family: Arial, Helvetica, sans-serif;
  color: black;
  font-size: 22px;
  font-weight: bold;
`;

export default App;
