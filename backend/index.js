const express = require("express");
const app = express();
const CORS = require("cors");
const cookieParser = require("cookie-parser");
app.use(express.json());
app.use(CORS());
app.use(cookieParser());

require("./mongodb/Config");

const { updateUserRoute, deleteUserRoute } = require("./routes/user.router");
const {
  signinRoute,
  signupRoute,
  googleRoute,
  signoutRoute,
} = require("./routes/auth.router");

app.use("/api/user", updateUserRoute);
app.use("/api/user", deleteUserRoute);
app.use("/api/auth", signinRoute);
app.use("/api/auth", signupRoute);
app.use("/api/auth", googleRoute);
app.use("/api/auth", signoutRoute);

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
