"use strict";

const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

// use this package to generate unique ids: https://www.npmjs.com/package/uuid
//installed - yarn add uuidv4 -and- yarn add uuid
// const { v4: uuidv4 } = require("uuid");

//waiting for the new client request
const { MongoClient } = require("mongodb");
require("dotenv").config();
// const async = require("async");
const { MONGO_URI, API_KEY } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

//popularMovies
let getPopularMovie = async (req, res) => {
  try {
    console.log("HelloHelloHello", getPopularMovie);

    const popularMovies = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;

    const rawData = await fetch(popularMovies);
    const movieData = await rawData.json();
    console.log("Md", movieData);
    console.log("rD", rawData);
    if (movieData) {
      res.status(200).json({
        status: 200,
        data: movieData,
        message: "Movies!",
      });
    } else {
      res.status(404).json({
        status: 404,
        error: "Cannot Find the movie!",
      });
    }
  } catch (err) {
    res.status(500).json({
      status: 500,
      error: err,
    });
  }
};

const popularMovie = async (req, res) => {
  await console.log("hello?", popularMovie);
};

module.exports = {
  getPopularMovie,
};
