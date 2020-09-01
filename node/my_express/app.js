var express = require('express')
var http = require('http')
var routes = require('./routes')
var app = express()
app.get('/',function(req, res){
     res.send('Hello world from express by Claudinei')
})

app.use(routes)

http.createServer(app).listen(3000, function(){
     console.log('Express started')
})

// app.listen(3000,function(){
//      console.log('Express started')
// })