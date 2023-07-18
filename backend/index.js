const express = require("express");
const cors = require("cors");
const app = express();
const { PORT, connection } = require("./config/db");
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.status(200).send("<h1>Hello World from Buycars api.</h1>");
});

//listing to the server
app.listen(PORT, connection);
