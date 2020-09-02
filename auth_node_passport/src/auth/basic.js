const BasicStrategy = require('passport-http').BasicStrategy //Estratégia ecolhida

module.exports = new BasicStrategy( 
     //cb = função de callback
     function(username, password, cb){
          if(username === 'admin' && password ==='admin'){
               return cb(null,true)//(erro = null, retorno = true)
          }else{
               return cb(null,false)//(erro = null, retorno = false)
          }
     }
)