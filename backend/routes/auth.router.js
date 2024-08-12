const express = require('express');
const router = express.Router();
const {signup} = require('../controllers/auth.controller')
module.exports=router.post('/signup',signup);