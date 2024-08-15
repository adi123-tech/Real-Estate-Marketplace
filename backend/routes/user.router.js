const express = require("express");
const router = express.Router();
const {updateUser,deleteUser} = require("../controllers/user.controller.js");
const verifyToken = require("../utils/verifyToken.js");
const updateUserRoute = router.post("/update/:id", verifyToken, updateUser);
const deleteUserRoute = router.delete("/delete/:id", verifyToken, deleteUser);
module.exports = {updateUserRoute,deleteUserRoute}
