const express = require("express");
const mongodb = require("./db/connect");
const cors = require("cors");

const port = process.env.PORT || 3000;
const app = express();

app.use(express.json());

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
