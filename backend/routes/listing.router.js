const express = require("express");
const { createList } = require("../controllers/listing.controller");
const verifyToken = require("../utils/verifyToken");
const router = express.Router();

const createListRouter = router.post("/create",verifyToken, createList);

module.exports = { createListRouter };
