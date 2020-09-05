const express = require('express')
const passport = require('passport')
const router = express.Router()
const isAuth = require('./../../auth/middleware')

module.exports = (passport)=>{
     router.get('/', isAuth,require('./all'))
     router.post('/', isAuth, passport.authenticate('local-signup',{
          successRedirect: '/',
          failureRedirect: '/users'
     }))
     // router.post('/', require('./create'))
     router.get('/new',  require('./new'))
     router.delete('/:id', isAuth, require('./remove.js'))
     return router
}
