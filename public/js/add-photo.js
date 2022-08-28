$(document).ready(function(){
    $image_crop = $("#image-preview").croppie({
        enableExif:true,
        viewport:{
            width:300,
            height:250,
            type:'square'
        },
        boundary:{
            width:350,
            height:300
        }
    });
    $("#upload_image").change(function(){
        var reader = new FileReader();
        reader.onload = function(event){
            $image_crop.croppie('bind',{
                url:event.target.result
            }).then(function(){
                console.log("jquery binding completed");
            });
        }
        reader.readAsDataURL(this.files[0]);
    });
    $(".crop_image").click(function(event){
        // event.preventDefault();
        $image_crop.croppie('result',{
            type:'canvas',
            size:'viewport'
        }).then(function(response){
            let _token = $("input[name=_token]").val(); 
            $id = $('.img-form').children('.data-id').data('id');
            $.ajax({
                url:"/product/add-photo/"+$id,
                type:"post",
                data:{
                    image:response,
                    _token:_token
                },
                // dataType:"json",
                success:function(data){
                    $('.alert').fadeIn('slow');
                    $('.alert').addClass('alert-success');
                    $('.alert').removeClass('alert-danger');
                    $('.alert').html(data.success_smg);
                    setTimeout(() => {
                        $("#alert").fadeOut();
                        location.reload();
                    }, 3000);
                }
            });
        });
    });
});

