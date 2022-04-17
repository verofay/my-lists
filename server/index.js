"use strict";

// import the needed node_modules.
const express = require("express");
const app = express();

const { getPopularMovie } = require("./handlers");

// express();

app.use(express.json());

//ENDPOINTS
//GET
// app.get("/api/list/{list_id}", getListId);
app.get("/api/movie/popular", getPopularMovie);
// app.get("api/popular-movie/:search", getSearchMovie);
// app.get("", getUsers)
// app.get("/api/users", getUsers);

//POST
// app.post("/api/add-users", addUsers);

app.get("*", (req, res) => {
  res.status(404).json({
    status: 404,
    message: "This is obviously not the page you are looking for.",
  });
});

// Node spins up our server and sets it to listen on port 8000.
app.listen(8000, () => console.log(`Listening on port 8000`));
