const express = require('express');
const router = express.Router();
const authContoller = require('../controllers/auth.controller')
module.exports=router.post('/signup',authContoller);