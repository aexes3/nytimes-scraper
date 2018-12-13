$('#scrape').click(function(){
    $.get('/scrape', function(result){
        console.log(result)
    })
})