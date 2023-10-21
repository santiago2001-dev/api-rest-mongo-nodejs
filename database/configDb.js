//const mongoose = require("mongoose");
const { MongoClient } = require("mongodb");


const client = new MongoClient(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

client
  .connect()
  .then(() => {
    console.log("conection successfully inr db");
  })
  .catch((error) => {
    console.log("error connecting", error);
  });

module.exports = {
  client,
};
