$(document).ready(function(){

        if($('#location-yes').is(':checked')){
            $('#deferent-location').fadeIn();
            $('#location-area').fadeIn();
            $('#location-city').fadeIn();
        }else{
            $('#deferent-location').fadeOut();
            $('#location-area').fadeOut();
            $('#location-city').fadeOut();
        }
    $('input[name="location"]').change(function(){
        
        if($('#location-yes').is(':checked')){
            $('#deferent-location').fadeIn();
            $('#location-area').fadeIn();
            $('#location-city').fadeIn();
        }else{
            $('#deferent-location').fadeOut();
            $('#location-area').fadeOut();
            $('#location-city').fadeOut();
        }
    });
    $("#city").change(function(){
        $('.shipping-spinner').fadeIn();
        let city_id = $(this).val();
        let _token = $("input[name=_token]").val(); 
        $.ajax({
            type:'post',
            url:'/get_u_area',
            data:{
                city:city_id,
                _token: _token,
            },
            success:function(data){
                if($('#area').children('option').is('option')){
                    $('#area').children('option').remove();
                }
                    $('#area').append(data.area);
                    $('.shipping-spinner').fadeOut('slow');
            }
        });
    });
});
$(document).ready(function(){
    $('#city').change(function(){
        $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            }
        });
        var city_id=$(this).val();
        $.ajax({
            type:'get',
            url:'/cart/change-shipping/'+city_id,
            data:{
                _token: '{{csrf_token()}}',
            },
            success(data){
                $('#checkout-summary').html(data.summary);
            }
        })
    })
});