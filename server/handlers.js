"use strict";

const fetch = (...args) =>
  import("node-fetch").then(({ default: fetch }) => fetch(...args));

// use this package to generate unique ids: https://www.npmjs.com/package/uuid
//installed - yarn add uuidv4 -and- yarn add uuid
// const { v4: uuidv4 } = require("uuid");

//waiting for the new client request
const { MongoClient } = require("mongodb");
// const router = express.Router();
require("dotenv").config();
// const async = require("async");
const { MONGO_URI, API_KEY } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

// get popularMovies from the API
const getPopularMovie = async (req, res) => {
  console.log("HelloHelloHello", getPopularMovie);
  try {
    const popularMovies = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;

    const rawData = await fetch(popularMovies);
    const movieData = await rawData.json();
    // console.log("rD", rawData);
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

console.log;

//Post popular movies to the db
// const addPopularMovie = async (req, res) => {
//   res.send({ type: "POST" });
//   console.log("AddingPopMovies", addPopularMovie);
// };

// put request to update movies in db

// const getSearchMovie = async (req, res) => {
//   try{
//     const findMovie=
//   }
//   console.log("Looking For a Movie", getSearchMovie);
// };
// const getpopularMovie = async (req, res) => {
//   console.log("hello?", popularMovie);
// };

const getUsers = async (req, res) => {
  try {
    const client = new MongoClient(MONGO_URI, options);
    await client.connect();
    console.log("connected!");
    const db = client.db("my_lists");
    const users = await db.collection("users").find().toArray();
    console.log("Im here", users);
    res.status(200).json({ status: 200, data: users, message: "users Yay!" });
  } catch (err) {
    res.status(400).json({ status: 400, data: err, message: "err Yay!" });
  }
};

module.exports = {
  getPopularMovie,
  getUsers,
};
