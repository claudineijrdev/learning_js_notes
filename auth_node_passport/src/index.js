module.exports = (app,passport) =>{
     //Este Middleware, na rota inicial vai requerer o index da pasta controller/main
     app.use('/', require('./controller/main/index'))
     app.use('/users', require('./controller/users/index')(passport))
     app.use('/auth',require('./controller/auth/index')(passport))
}