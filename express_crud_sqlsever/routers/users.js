const express = require('express');
const sql = require('../config/db')
const router = express.Router()



router.get('/', (req, res) => {
    res.send('Akarapon & Wuttichai')
})




module.exports = router;
