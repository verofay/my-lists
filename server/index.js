"use strict";

// import the needed node_modules.
const express = require("express");

//set up express app
const app = express();

const {
  getPopularMovie,
  // getSearchMovie,
  // getMainPage,
  getUsers,
  // usersSignIn,
  // addPopularMovie,
} = require("./handlers");

// express();

app.use(express.json());

//ENDPOINTS
//GET
app.get("/api/movie/popular", getPopularMovie);
// app.get("api/movie/:search", getSearchMovie);
app.get("/api/users", getUsers);

//POST
// app.post("/api/movie/popular", addPopularMovie);
// app.post("/api/users/signIn", usersSignIn);

//handle err(404) message req
app.get("*", (req, res) => {
  res.status(404).json({
    status: 404,
    message: "This is obviously not the page you are looking for.",
  });
});

//listen for requests
// Node spins up our server and sets it to listen on port 8000.
app.listen(8000, () => console.log(`Listening on port 8000`));
