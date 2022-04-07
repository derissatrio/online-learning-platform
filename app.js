const { urlencoded, json } = require("express");
const express = require("express");
const app = express();
const port = process.env.PORT || 2000;
const cors = require("cors");
const router = require("./routes");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use(router);

app.listen(port, () => {
  console.log("Server is running");
});
