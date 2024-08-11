const express = require("express");
const app = express();
const CORS = require("cors");
app.use(express.json());
app.use(CORS());

require("./mongodb/Config");

const userRoute = require("./routes/user.router");
const authRoute = require("./routes/auth.router");

app.use("/api/user", userRoute);
app.use("/api/auth", authRoute);

//middleware
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "internal server error";
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});

app.listen(5000, () => {
  console.log("Server running on port 5000....................?");
});
