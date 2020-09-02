const express = require('express')
const router = express.Router()
//quando acessar o '/' vai requerer o controller/main/main.js
router.get('/',require('./main'))

module.exports = router