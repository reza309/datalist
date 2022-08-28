$(document).ready(function(){
    $('#btn_change_name').click(function(){
        let first_name = $('#first_name').val();
        let last_name  = $('#last_name').val();
        let _token = $("input[name=_token]").val(); 
        $.ajax({
            type:'post',
            url:'/update_name',
            data:{
                first_name:first_name,
                last_name:last_name,
                _token: _token,
            },
            success:function(data){
                if(data.failed){
                    $("#nameForm").prev('.alert').fadeIn('slow');
                    $("#nameForm").prev('.alert').addClass('alert-danger');
                    $("#nameForm").prev('.alert').removeClass('alert-success');
                    $("#nameForm").prev('.alert').html(data.failed);
                }else if(data.success_smg){
                    //show name in name
                    $('.f_name').html(data.updated_f_name);
                    $('.l_name').html(data.updated_l_name);
                    //alert message in modal
                    $("#nameForm").prev('.alert').fadeIn('slow');
                    $("#nameForm").prev('.alert').addClass('alert-success');
                    $("#nameForm").prev('.alert').removeClass('alert-danger');
                    $("#nameForm").prev('.alert').html(data.success_smg);
                    setTimeout(() => {
                        $("#name").modal('toggle');
                    }, 3000);
                    
                }

            }
        });
    });
});

//code for update phone
$(document).ready(function(){
    $('#phoneForm').submit(function(e){
        e.preventDefault();
        let phone  = $('#input-phone').val();
        let _token = $("input[name=_token]").val(); 
        $.ajax({
            type:'post',
            url:'/update_phone',
            data:{
                phone:phone,
                _token: _token,
            },
            success:function(data){
                if(data.failed){
                    $('.alert').fadeIn('slow');
                    $('.alert').addClass('alert-danger');
                    $('.alert').removeClass('alert-success');
                    $('.alert').html(data.failed);
                }else if(data.success_smg){
                    //show name in name
                    $('.u-phone').html(data.u_phone);
                    //alert message in modal
                    $('.alert').fadeIn('slow');
                    $('.alert').addClass('alert-success');
                    $('.alert').removeClass('alert-danger');
                    $('.alert').html(data.success_smg);
                    setTimeout(() => {
                        $("#btn_phone_update").modal('toggle');
                    }, 3000);
                    
                }
            }
        });
    });
});
//change the area when select city
$(document).ready(function(){
    $("#input-city").change(function(){
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
                // alert(data.area);
              }
        });
    });
});
//update city and area
$(document).ready(function(){
    $('#areaForm').submit(function(e){
        e.preventDefault();
        let area  = $('#area').val();
        let _token = $("input[name=_token]").val(); 
        $.ajax({
            type:'post',
            url:'/update_area',
            data:{
                area:area,
                _token: _token,
            },
            success:function(data){
                if(data.success_smg){
                    // show name in name
                    $('.u-city').html(data.u_city);
                    $('.u-area').html(data.u_area);
                    //alert message in modal
                    $('.alert').fadeIn('slow');
                    $('.alert').addClass('alert-success');
                    $('.alert').removeClass('alert-danger');
                    $('.alert').html(data.success_smg);
                    setTimeout(() => {
                        $("#modal_area").modal('toggle');
                    }, 3000);
                    // alert(data.success_smg);
                    
                }
            }
        });
    });
});
//functions for update address
$(document).ready(function(){
    $('#addressForm').submit(function(e){
        e.preventDefault();
        let address  = $('#input-address').val();
        let _token = $("input[name=_token]").val(); 
        $.ajax({
            type:'post',
            url:"/update_address",
            data:{
                address:address,
                _token: _token,
            },
            success:function(data){
                if(data.success_smg){
                    // show name in name
                    $('.u-address').html(data.u_address);
                    //alert message in modal
                    $('.alert').fadeIn('slow');
                    $('.alert').addClass('alert-success');
                    $('.alert').removeClass('alert-danger');
                    $('.alert').html(data.success_smg);
                    setTimeout(() => {
                        $("#modal_address").modal('toggle');
                    }, 3000);
                    // alert(data.success_smg);
                    
                }
            }
        });
    });
});
//update profile photo
$(document).ready(function(){
    $('#photoForm').submit(function(e){
        e.preventDefault();
        // let user_photo  = $('input[type=file]').get(0).files[0];
        // let _token = $("input[name=_token]").val(); 
        $.ajax({
            type:'POST',
            url:"/update-photo",
            data:new FormData(this),
            processData: false,
            contentType: false, 
            success:function(data){
                if(data.success_smg){
                    $('.alert').fadeIn('slow');
                    $('.alert').addClass('alert-success');
                    $('.alert').removeClass('alert-danger');
                    $('.alert').html(data.success_smg);
                    setTimeout(() => {
                        $("#modal_photo").modal('toggle');
                        location.reload();
                    }, 3000);
                    
                }
                if(data.failed){
                    $('.alert').fadeIn('slow');
                    $('.alert').addClass('alert-danger');
                    $('.alert').removeClass('alert-success');
                    $('.alert').html(data.failed);
                }
            }
        });
    });
    //preview the image file
    
});
function previewFile(input){
    let file = $('input[type=file]').get(0).files[0];
    if(file){
        var reader = new FileReader();
        reader.onload = function(){
            $('#previewImg').attr('src',reader.result);
        }
        reader.readAsDataURL(file);
    }
}

