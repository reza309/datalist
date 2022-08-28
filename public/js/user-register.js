$(document).ready(function(){
    $("#city").change(function(){
        let city_id = $(this).val();
        let _token = $("input[name=_token]").val(); 
        $.ajax({
            type:'post',
            url:'/get_area',
            data:{
                city:city_id,
                _token: _token,
              },
              success:function(data){
                  if($('#area').children('option').is('option')){
                      $('#area').children('option').remove();
                  }
                    $('#area').append(data.area);
              }
        });
    });
});