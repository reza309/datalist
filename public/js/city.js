$(document).ready(function(){
    $('.city-form').submit(function(e){
        e.preventDefault();
        // let user_photo  = $('input[type=file]').get(0).files[0];
        var id = $(this).children('.modal-body').data('id');
        let _token = $("input[name=_token]").val(); 
        $.ajax({
            type:'POST',
            url:"/update-city/"+id,
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