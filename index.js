const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { dataWithhash } = require("./data");

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(cors());

app.get("/dataWithhash", (req, res) => {
  res.send(dataWithhash);
});


app.listen(port, () =>
  console.log(`Data with its hash waiting for you on port: ${port}!`)
);
