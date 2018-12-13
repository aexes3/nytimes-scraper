var express = require('express');
var axios = require('axios');
var cheerio = require('cheerio');
var mongoose = require('mongoose');
var exphbs  = require('express-handlebars');

var app = express();
var PORT = process.env.PORT || 8005;

app.use(express.static('public'));
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

app.get('/scrape',function(req, res){
    

    axios.get('https://www.nytimes.com/').then(function(result){
        
        console.log(result,"This is the result");
       // const $ = cheerio.load(result.data);

       
     
        res.send("Scrape complete");
    })
    
    //res.render('home')

})

app.get('/', function(req,res){
    res.render('home');
})







app.listen(PORT, function(){
    console.log('listening on port' + PORT);
});