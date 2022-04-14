const { MongoClient } = require("mongodb");

require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const getCollection = async (dbName) => {
  //waiting for the new client request
  const client = new MongoClient(MONGO_URI, options);

  //connect to the client
  await client.connect();
  //connect to database
  const db = client.db(dbName);
  console.log("connected!", dbName);

  //new variable "await" a "flight" from db
  //   await db.collection("Reservations").insertMany(reservations);
  //   await db.collection("SA231").insertMany(flights.SA231);

  //close the connection database server
  client.close();
  console.log("disconnected!");
};

// call the function
getCollection();
