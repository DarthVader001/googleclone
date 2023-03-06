$(function(){
    $("input").on('keyup', function(e){
        if (e.key == 'Enter' || e.key ==13) {
            let q = $('input').val();
            window.open('http://google.com/search?q='+q);
        }
    })
})