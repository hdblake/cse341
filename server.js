const express = require("express");
const mongodb = require("./db/connect");
const cors = require("cors");

const port = process.env.PORT || 3000;
const app = express();

app.use(express.json()).use((req, res, next) => {
  res.setHeader(
    "Access-Control-Allow-Origin",
    "https://cse341-o9h4.onrender.com"
  );
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Z-Key"
  );
  res.setHeader("Content-Type", "application/json");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, PUT, POST, DELETE, OPTIONS"
  );
  next();
});

app.use(cors());

app.use("/", require("./routes"));

mongodb.initDb((error, mongodb) => {
  if (error) {
    console.log(error);
  } else {
    app.listen(port, () => {
      console.log(`Connected to DB and listening on port: ${port}`);
    });
  }
});
