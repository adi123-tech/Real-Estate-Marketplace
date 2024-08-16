const express = require("express");
const router = express.Router();
const {
  signup,
  signin,
  google,
  signout,
} = require("../controllers/auth.controller");
const signupRoute = router.post("/signup", signup);
const signinRoute = router.post("/signin", signin);
const googleRoute = router.post("/google", google);
const signoutRoute = router.get("/signout", signout);

module.exports = { signupRoute, signinRoute, googleRoute, signoutRoute };
