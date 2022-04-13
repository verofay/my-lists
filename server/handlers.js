"use strict";

// API_KEY(v3 auth)614fb9d9d416234b14abdd8be76a4451 ---> put in .env

// use this package to generate unique ids: https://www.npmjs.com/package/uuid
//installed - yarn add uuidv4 -and- yarn add uuid
const { v4: uuidv4 } = require("uuid");

// use this data. Changes will persist until the server (backend) restarts.
// const { flightS, reservation } = require("./data");

//waiting for the new client request
const { MongoClient } = require("mongodb");

require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

module.exports();
