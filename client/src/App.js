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
// import SignIn from "./components/SignIn";

const App = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Header />
      <Switch>
        <Route to="/">
          LandingPage
          <LandingPage />
        </Route>

        <Route>SignIn</Route>
        <Route>Profile</Route>
        <Route>List</Route>
        <Route>Movies</Route>
        {/* <SignIn /> */}
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
