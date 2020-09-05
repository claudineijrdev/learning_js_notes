module.exports = (req, res) =>{
     //quando o usuário acesar a rota inicial ('/') o server vai requerer a
     //seguinte cadeia de modulos: 
     //index.js->src/index.js->controller/main/index.js->controller/main/main.js
     //para entção responder a uma requisição com o código que segue:
     //return res.json({msg: 'Hello from Express.js + Passport'})

     return res.render('main/index', {
          user: req.user || null
     })
}