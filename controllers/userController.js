const express = require('express');
const router = express.Router();
const User = require('../models/userModel.js');

router.get('/', (req,res) =>{
    res.send("users homepage")

});




module.exports = router;