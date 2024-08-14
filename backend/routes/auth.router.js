const express = require("express");
const router = express.Router();
const { signup, signin, google } = require("../controllers/auth.controller");
const signupRoute = router.post("/signup", signup);
const signinRoute = router.post("/signin", signin);
const googleRoute = router.post("/google", google);

module.exports = { signupRoute, signinRoute, googleRoute };
