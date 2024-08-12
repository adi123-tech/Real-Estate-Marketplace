const express = require("express");
const router = express.Router();
const test = require("../controllers/user.controller.js");
module.exports = router.get("/test", test);
