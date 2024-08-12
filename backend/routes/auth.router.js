const express = require("express");
const router = express.Router();
const { signup, signin } = require("../controllers/auth.controller");
const signupRoute = router.post("/signup", signup);
const signinRoute = router.post("/signin", signin);
module.exports = { signupRoute, signinRoute };
