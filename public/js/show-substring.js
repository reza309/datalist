$(document).ready(function(){
    $('.media-body').each(function(){
        var source_string = $(this).children( ".review-text" ).text();
        var str_sub = source_string.substr(0,100);
        var count = $(this).children(".review-text").text().length;
        $(this).children( ".review-text" ).html(str_sub+'....');
        $(this).children(".review-text").fadeIn();
        console.log(str_sub);
        $(this).children('.show-sub-text').click(function(){
            
            if($(this).prev(".review-text").text().length > 105)
            {
                
                $(this).prev('.review-text').html(source_string.substr(0,100));
                $(this).html('Show Less');
            }else{
                
                $(this).prev('.review-text').html(source_string.substr(0,count));
                $(this).html('Show More');
            }

            

            // $(this).addClass('hide-sub-text');
            // $(this).removeClass('show-sub-text');
        });
    })
    
    
});