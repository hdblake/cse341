const dotenv = require("dotenv");
dotenv.config();
const MongoClient = require("mongodb").MongoClient;

let db;

const initDb = (callback) => {
  if (db) {
    console.log("Database is already initialized!");
    return callback(null, db);
  }
  MongoClient.connect(process.env.MONGO_URI)
    .then((client) => {
      db = client;
      callback(null, db);
    })
    .catch((error) => {
      callback(error);
    });
};

const getDb = () => {
  if (!db) {
    throw Error("Database is not initialized");
  }
  return db;
};

module.exports = {
  initDb,
  getDb
};
