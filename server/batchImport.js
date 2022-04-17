const { MongoClient } = require("mongodb");
require("dotenv").config();
const { MONGO_URI } = process.env;

const options = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
};

const users = require("./data");

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

//TEMPLATE
// const batchImport = async (items) => {
//     const client = new MongoClient(MONGO_URI, options);
// try {
//     await client.connect();
//     const db = client.db("exercise_2");
//     // console.log("connected!", seats);

//     await db.collection("seats").insertMany(items);

// } catch(err){
//     console.log(err)
// }
//     client.close();
//     console.log("disconnected!");
// }

// batchImport(seats)
