(function(){
    var words = [
        'a Graphic Designer',
        'a Fashion Designer',
        'a Musician',
        'a Photographer',
        'an Artist',
        
        
        ], i = 0;
    setInterval(function(){
        $('#changingword').fadeOut(function(){
            $(this).html(words[i=(i+1)%words.length]).fadeIn();
        });
    }, 3000);
      
})();
