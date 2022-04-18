// const { MongoClient } = require("mongodb");
// require("dotenv").config();
// const { MONGO_URI } = process.env;


// const options = {
//   usedNewUrlParser: true,
//   useUnifiedTopology: true,
// };

// const dbFunction = async (dbName) => {
//   const client = new MongoClient(MONGO_URI, options);
//   await client.connected();
//   const db = client.db(dbName);
//   console.log("connected!");
//   client.close();
//   console.log("disconnected");
// };

// dbFunction("users");
