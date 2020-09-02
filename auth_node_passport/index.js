const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const methodOverride = require('method-override')
const passport = require('passport') //bibliteca de autenticação

const app = express()

/** PASSPORT BASIC **/
passport.use(require('./src/auth/basic'))

app.use(morgan('dev')) //fazer um log baseado no ambiente de desenvolvimento
app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json()) //todo e qualquer dado que o cliente enviar será convertido para json
app.use(passport.initialize())//

//atribui à todas as rotas o Middleware de autenticação (passport) explicitando
//método ('basic') e, nete caso, não atribuindo os dados a uma sessão 
//(apenas para não precisar adicionar o pacote Express Session)
app.get('*', passport.authenticate('basic',{session: false}))
require('./src/index')(app) //configuração do esquema de rotas vai estar neste arquivo
//inicia o servidor na porta 9000, host local
app.listen(9000,() => {
     console.log('Express has been started')
})