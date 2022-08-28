$(document).ready(function(){
    // var numItems = $('.btn-show-more').prevAll('.post').length;
    $( ".post-container" ).each(function() {
        var post = "";
        var numItems= $( this ).find('.post').length;
        var hideItem = numItems-4;
        if(numItems > 4 && hideItem > 0){
            $show_prost = $(this).data('post');
            // $(this).find('.post').slice(4).hide('fast');
            $(this).find('.post').slice($show_prost).css({
                'display':'none'
            });
            post= $(this).find('.post');
            $(this).find('.btn-show-more').fadeIn('fast');
        }else{
            $(this).find('.btn-show-more').hide('fast');
        }
        var count = 4;
        $(this).find('.btn-show-more').on('click',function(e){
            e.preventDefault();
            count = count+4;
            if(post.is(":hidden")){
                $('.post-container').css({
                    'height':'auto'
                });
                post.slice(0,count).fadeIn();
                if(count >= numItems){
                    $(this).fadeOut();
                }
            }
        });
        
    });
    
});



function show_more(){
    $(document).ready(function(){
    $( ".post-container" ).each(function() {
        var post_2 = "";
        var numItems= $( this ).find('.post').length;
        var hideItem = numItems-4;
        if(numItems > 4 && hideItem > 0){
            $show_prost = $(this).data('post');
            // $(this).find('.post').slice(4).hide('fast');
            $(this).find('.post').slice($show_prost).css({
                'display':'none'
            });
            post_2= $(this).find('.post');
            $(this).find('.btn-show-more').fadeIn('fast');
        }else{
            $(this).find('.btn-show-more').hide('fast');
        }
        var count = 4;
        $(this).find('.btn-show-more').on('click',function(e){
            e.preventDefault();
            count = count+4;
            if(post_2.is(":hidden")){
                $('.post-container').css({
                    'height':'auto'
                });
                post_2.slice(0,count).fadeIn();
                if(count >= numItems){
                    $(this).fadeOut();
                }
            }
        });
        
    });
});
}
