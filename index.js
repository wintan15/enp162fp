var express = require('express')
var engines = require('consolidate')
var bodyParser = require('body-parser')
var fs = require('fs')
var validator = require('validator')

var app = express()

app.set('port', (process.env.PORT || 5000))
app.set('views',__dirname)
app.engine('html', engines.hogan)
app.set('view engine', 'html')
app.set('project',__dirname)
app.use(express.static(__dirname))
app.set('port', (process.env.PORT || 5000))

app.get('/', function(request, response){
        response.render('index');
})

app.get('/GIS', function(request, response){
        response.render('GIS');
})