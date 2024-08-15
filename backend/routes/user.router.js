const express = require("express");
const router = express.Router();
const updateUser = require("../controllers/user.controller.js");
const verifyToken = require("../utils/verifyToken.js");
module.exports = router.post("/update/:id", verifyToken, updateUser);
