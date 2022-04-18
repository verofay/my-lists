const { MongoClient } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const users = require("./data/users.json");
console.log("users", users);

//waiting for the new client request
const batchImport = async (users) => {
  const client = new MongoClient(MONGO_URI, options);
  try {
    await client.connect();
    const db = client.db("my_lists");
    console.log("connected", users);
    await db.collection("users").insertMany(users);
  } catch (err) {
    console.log(err);
  }
  client.close();
  console.log("disconnect!");

  // console.log(result);
};

// call the function
batchImport(users);
