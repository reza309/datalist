$(document).ready(function(){
    /**********************************
     * add item to cart
     *********************************/
    $('.btn-add-cart').click(function(){
        let product_id = $(this).data('pro_id');
        $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            }
        });
        $.ajax({
            type:'post',
            url:'/cart/add-cart/'+product_id,
            data:{
                _token: '{{csrf_token()}}'
            },
            processData: false,
            contentType: false, 
            success:function(data){
                $('.custom-toast').addClass('toast-show');
                $('.custom-toast').removeClass('toast-hide');
                $('.cart-count').html(data.count);
                setTimeout(() => {
                    $('.custom-toast').addClass('toast-hide');
                    $('.custom-toast').removeClass('toast-show');
                }, 2000);
            }
        });
    });
    /***********************************
     * remove item from cart
     *********************************/
    $('#cart-items').each(function(){
        $(document).on('click','.remove-cart',function(){
            let cart_id = $(this).data('cart_id');
            $.ajaxSetup({
                headers: {
                    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                }
            });
            
            $.ajax({
                type:'post',
                url:"/cart/remove-item/"+cart_id,
                data:{
                    _token: '{{csrf_token()}}'
                },
                processData: false,
                contentType: false, 
                success:function(data){
                    $('#cart-items').html(data.items);
                    $('.cart-count').html(data.count);
                }
            });
        });
    });
    /***********************************
     * add cart quantity
     ***********************************/
    
        
});
// $(document).ready(function(){    
    $(document).on('click','.s-qnt-btn-r',function(){
        let cart_id = $(this).data('cart_id');
        // let quantity = $(this).data('qnt');
        $('.qnt-loader').fadeIn();
        quantity = 1;
        $.ajaxSetup({
            headers: {
                'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
            }
        });
        setTimeout(() => {
            $('.qnt-loader').fadeOut("slow");
            $.ajax({
                type:'get',
                url:'/cart/add-quantity/'+cart_id,
                data:{
                    _token: '{{csrf_token()}}',
                    quantity: quantity
                },
                // processData: false,
                // contentType: false, 
                success:function(data){
                    $('#cart-items').html(data.items);
                }
            });
        }, 2000);
    });
// });

/********************************
 * descrease cart quantity
 *******************************/
$(document).on('click','.s-qnt-btn-l',function(){
    let cart_id = $(this).data('cart_id');
    $('.qnt-loader').fadeIn();
    quantity = 1;
    $.ajaxSetup({
        headers: {
            'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
        }
    });
    setTimeout(() => {
        $('.qnt-loader').fadeOut("slow");
        $.ajax({
            type:'get',
            url:'/cart/remove-quantity/'+cart_id,
            data:{
                _token: '{{csrf_token()}}',
                quantity: quantity
            },
            // processData: false,
            // contentType: false, 
            success:function(data){
                $('#cart-items').html(data.items);
            }
        });
    }, 2000);
});