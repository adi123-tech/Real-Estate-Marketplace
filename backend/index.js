const express = require("express");
const app = express();
const CORS = require("cors");
app.use(express.json());
app.use(CORS());

app.get("/hello", (req, res) => {
  res.send({ msg: "Hello" });
});

app.listen(5000, () => {
  console.log("Server running on port 5000....................?");
});
