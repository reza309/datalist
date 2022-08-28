$(document).ready(function(){
    $('.title-form').submit(function(e){
        e.preventDefault();
        // let user_photo  = $('input[type=file]').get(0).files[0];
        var id = $(this).children('.modal-body').data('id');
        let _token = $("input[name=_token]").val(); 
        $.ajax({
            type:'POST',
            url:"/product/update-title/"+id,
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
/**************************************
 * update purchase price
 ***********************************/
$(document).ready(function(){
    $('.p-price-form').submit(function(e){
        e.preventDefault();
        // let user_photo  = $('input[type=file]').get(0).files[0];
        var id = $(this).children('.modal-body').data('id');
        let _token = $("input[name=_token]").val(); 
        $.ajax({
            type:'POST',
            url:"/product/update-purchase-price/"+id,
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
/**************************************
 * update selles price
 ***********************************/
$(document).ready(function(){
    $('.s-price-form').submit(function(e){
        e.preventDefault();
        // let user_photo  = $('input[type=file]').get(0).files[0];
        var id = $(this).children('.modal-body').data('id');
        let _token = $("input[name=_token]").val(); 
        $.ajax({
            type:'POST',
            url:"/product/update-selles-price/"+id,
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
/**************************************
 * update discount
 ***********************************/
$(document).ready(function(){
    $('.discount-form').submit(function(e){
        e.preventDefault();
        // let user_photo  = $('input[type=file]').get(0).files[0];
        var id = $(this).children('.modal-body').data('id');
        let _token = $("input[name=_token]").val(); 
        $.ajax({
            type:'POST',
            url:"/product/update-discount/"+id,
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
/**************************************
 * update stock amount
 ***********************************/
$(document).ready(function(){
    $('.stock-form').submit(function(e){
        e.preventDefault();
        // let user_photo  = $('input[type=file]').get(0).files[0];
        var id = $(this).children('.modal-body').data('id');
        let _token = $("input[name=_token]").val(); 
        $.ajax({
            type:'POST',
            url:"/product/update-stock/"+id,
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
/*************************************
 * change subcategory by catgory
 *************************************/
$(document).ready(function(){
    $('#category').change(function(){
        let category_id = $(this).val();
        let _token = $("input[name=_token]").val(); 
        $.ajax({
            type:'POST',
            url:"/get-sub-category",
            data:{
                category:category_id,
                _token: _token,
            },
            success:function(data){
                if($('#sub_category').children('option').is('option')){
                    $('#sub_category').children('option').remove();
                }
                  $('#sub_category').append(data.sub_category);
            //   alert(data.sub_category);
            }
        });
    });
});
/**************************************
 * update stock amount
 ***********************************/
$(document).ready(function(){
    $('.category-form').submit(function(e){
        e.preventDefault();
        // let user_photo  = $('input[type=file]').get(0).files[0];
        var id = $(this).children('.modal-body').data('id');
        let _token = $("input[name=_token]").val(); 
        $.ajax({
            type:'POST',
            url:"/product/update-category/"+id,
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
/**************************************
 * update stock amount
 ***********************************/
$(document).ready(function(){
    $('.brand-form').submit(function(e){
        e.preventDefault();
        // let user_photo  = $('input[type=file]').get(0).files[0];
        var id = $(this).children('.modal-body').data('id');
        let _token = $("input[name=_token]").val(); 
        $.ajax({
            type:'POST',
            url:"/product/update-brand/"+id,
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
    
}); 
/************************************
 * add ck editor
 *********************************/
ClassicEditor
.create( document.querySelector( '#description' ), {
    toolbar: [ 'heading', '|', 'bold', 'italic', 'link', 'bulletedList', 'numberedList', 'blockQuote' ],
    heading: {
        options: [
            { model: 'paragraph', title: 'Paragraph', class: 'ck-heading_paragraph' },
            { model: 'heading1', view: 'h1', title: 'Heading 1', class: 'ck-heading_heading1' },
            { model: 'heading2', view: 'h2', title: 'Heading 2', class: 'ck-heading_heading2' }
        ]
    }
} )
.catch( error => {
    console.log( error );
} );
/**************************************
 * update stock amount
 ***********************************/
$(document).ready(function(){
    $('.description-form').submit(function(e){
        e.preventDefault();
        // let user_photo  = $('input[type=file]').get(0).files[0];
        var id = $(this).children('.modal-body').data('id');
        let _token = $("input[name=_token]").val(); 
        $.ajax({
            type:'POST',
            url:"/product/update-description/"+id,
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
    
}); 