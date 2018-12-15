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
    

    axios.get('https://www.nytimes.com/').then(function(response){
        const $ = cheerio.load(response.data);

        var result = [];

        $('.css-9ywo2s').each(function(i, element){

            let innerObj =  {
                title: $(element).text(),
                summary:  $(element).text()
            }

            result.push(innerObj)
            // result.;
            //result.link = $(this).attr("href");
            //result.image = $(this).attr("data-default-src");
            // result.
            
        })

        console.log(result)
     
        res.send(result);
    })
    
    //res.render('home')

})

app.get('/', function(req,res){
    res.render('home');
})


result = {
    title: '',
    whatever: ''
}




app.listen(PORT, function(){
    console.log('listening on port' + PORT);
});