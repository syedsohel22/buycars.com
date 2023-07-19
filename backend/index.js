const express = require("express");
const cors = require("cors");
const app = express();
const { PORT, connection } = require("./config/db");
const userRouter = require("./routes/user.routes");
const oemRouter = require("./routes/oemInvertory.routes");
const marketplaceRouter = require("./routes/maketplace.routes");
app.use(cors());
app.use(express.json());

app.use("/users", userRouter);
app.use("/oem", oemRouter);
app.use("/market", marketplaceRouter);
app.get("/", (req, res) => {
  res.status(200).send("<h1>Hello World from Buycars api.</h1>");
});

//listing to the server
app.listen(PORT, connection);
