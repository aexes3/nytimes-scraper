$('#scrape').click(function(){
    $.get('/scrape', function(result){
        console.log(result)
        
        //array iterate
       for(let i = 0; i < result.length; i++) {
           console.log(i)
            let h1 = $('<h1>') //= <h1></h1>
            h1.text(result[i].title) //= <h1>the titleeeeee</h1>
        let paragraph = $('<p>').text(result[i].summary)

            $('#cool').append(h1).append(paragraph)        //<div id='cool'><h1>the titleeeeee</h1></div>
        }
        
    })
})