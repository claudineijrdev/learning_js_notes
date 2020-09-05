const path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const methodOverride = require('method-override')
const passport = require('passport') //bibliteca de autenticação
const mongoose = require('mongoose')
const session = require('express-session')
const app = express()

/** PASSPORT BASIC **/
//passport.use(require('./src/auth/basic'))
//atribui à todas as rotas o Middleware de autenticação (passport) explicitando
//método ('basic') e, neste caso, não atribuindo os dados a uma sessão 
//(apenas para não precisar adicionar o pacote Express Session)
//app.get('*', passport.authenticate('basic',{session: false}))

/** PASSPORT LOCAL **/
require('./src/auth/local')(passport)
app.use(morgan('dev')) //fazer um log baseado no ambiente de desenvolvimento
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json()) //todo e qualquer dado que o cliente enviar será convertido para json
app.use(methodOverride('_method'))
app.use(session({secret: '!@#!@#$%$#ASDAS&ASD*&*', resave:false, saveUninitialized: true}))
app.use(passport.initialize())//
app.use(passport.session())
app.set('view engine', 'pug')
app.set('views', path.join(__dirname, 'src/view'))

require('./src/index')(app,passport) //configuração do esquema de rotas vai estar neste arquivo
//inicia o servidor na porta 9000, host local

mongoose.connect('mongodb://localhost:27017/auth', {useNewUrlParser: true, useUnifiedTopology: true })
mongoose.Promise = global.Promise
app.listen(9000,() => {
     console.log('Express has been started')
})