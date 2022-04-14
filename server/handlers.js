"use strict";

// use this package to generate unique ids: https://www.npmjs.com/package/uuid
//installed - yarn add uuidv4 -and- yarn add uuid
// const { v4: uuidv4 } = require("uuid");

//waiting for the new client request
// const { MongoClient } = require("mongodb");
// require("dotenv").config();
// const Mongodb = { MONGO_URI }.process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};
// fetch(

// );
//get {listId} endpoint
const getListId = async (req, res) => {
  // try{

  // }

  //waiting for the new client request
  const client = new MongoClient(MONGO_URI, options);

  await client.connect();
  const db = client.db("lists");
  console.log("HelloHelloHello");
  const id = req.params.id;
  //need to transform this one as soon as I get  VIP access TO THE LIST
  const movieList = movieList;

  if (movieList) {
    res.status(200).json({
      status: 200,
      data: movieList,
      message: "Movies!",
    });
  } else {
    res.status(404).json({
      status: 404,
      error: "Cannot Find the movie! ",
      data: movieList,
    });
  }
  console.log("Disconnect!");
  client.close();
};

module.exports = {
  getListId,
};
