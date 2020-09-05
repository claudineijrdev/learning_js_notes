const express = require('express')
const router = express.Router()
const isAuth = require('./../../auth/middleware')
//quando acessar o '/' vai requerer o controller/main/main.js
// router.get('/', isAuth, require('./main'))
router.get('/',  require('./main'))

module.exports = router