const errorHandler = require("./error");
const JWT = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

module.exports = (req, res, next) => {
  const token = req.cookies.access_token;

  if (!token) return next(errorHandler("404", "Unauthorized User"));

  JWT.verify(token, process.env.JWT_SecretKey, (err, user) => {
    if (err) return next(errorHandler("404", "Invalid Token"));
    req.user = user;
    next();
  });
};
