var rateIndex = -1;
    $(document).ready(function(){
        resetStarColors();
        $(".rating").on('click',function(){
//                                        resetStarColors();
            rateIndex = parseInt($(this).attr("data-rating"));
            // localStorage.setItem('rating',rateIndex);
            $(".rating-ajax").val(rateIndex);
        });
        
        $(".rating").mouseover(function(){
                resetStarColors();
            var data = parseInt($(this).attr("data-rating"));
            for(var i = 0; i< data; i++){
                $('.rating:eq('+i+')').css("color","orange");
            }
        });
        $(".rating").mouseleave(function(){
                resetStarColors();
                if(rateIndex !=-1){
                    for(var i = 0; i< rateIndex; i++){
                    $('.rating:eq('+i+')').css("color","orange");
                }
                }
        });
    });
    function resetStarColors(){
        $(".rating").css({
            'color':'#00000070' 
        });
    }

    $(document).ready(function(){
        $("#review-form").submit(function(e){
            e.preventDefault();
            let id = $("#product_id").val();
            let _token = $("input[name=_token]").val(); 
            $.ajax({
                type:'POST',
                url:"/users/save-review/"+id,
                data:new FormData(this),
                processData: false,
                contentType: false, 
                success:function(data){
                    if(data.success){
                        $('.submit-msg').fadeIn('slow');
                        $('.submit-msg').addClass('alert alert-success border p-3 rounded');
                        $('.submit-msg').removeClass('alert alert-danger border p-3 rounded');
                        $('.submit-msg').html(data.success);
                        $('.review-spiner').fadeIn('slow');
                        $("#review").val(null);
                        resetStarColors();
                        setTimeout(() => {
                            $(".submit-msg").fadeOut('slow');
                            $('.review-spiner').fadeOut('slow');
                        }, 3000);
                    }
                    if(data.failed){
                        $('.submit-msg').fadeIn('slow');
                        $('.submit-msg').addClass('alert alert-danger border p-3 rounded');
                        $('.submit-msg').removeClass('alert alert-success border p-3 rounded');
                        $('.submit-msg').html(data.failed);
                        $('.review-spiner').fadeIn('slow');
                        setTimeout(() => {
                            $(".submit-msg").fadeOut('slow');
                            $('.review-spiner').fadeOut('slow');
                        }, 3000);
                    }
                }
            });
        })
    });