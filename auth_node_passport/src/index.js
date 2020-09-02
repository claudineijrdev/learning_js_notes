module.exports = (app) =>{
     //Este Middleware, na rota inicial vai requerer o index da pasta controller/main
     app.use('/', require('./controller/main/index'))
}