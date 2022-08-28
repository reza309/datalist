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