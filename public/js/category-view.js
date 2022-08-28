
/******************************
 * category filter
 *****************************/
$(document).ready(function(){
    $("#category").change(function(){
        $(".cat-overlay-container").fadeIn();
        let id = $(this).val();
        let _token = $("input[name=_token]").val(); 
        $.ajax({
            type:'post',
            url:"/pages/category-filter",
            data:{
                category_id:id,
                _token: _token
            },
            // dataType:'JSON',
            // processData: false,
            // contentType: false, 
            success:function(data){
                $("#category_products").html(data.products);
                setTimeout(() => {
                    $(".cat-overlay-container").fadeOut();
                }, 2000);
                $("#sub-cat-list").html(data.sub_cat);
                action_sub_cat();
                show_more();
               
            }
        });
    });
});
$(document).ready(function(){
    $("#sub-cat-list").each(function(){
        let list = $(this);
        $("#sub-cat-list").find('a').each(function(){
            let list_item = $(this);
            $(this).click(function(){
                list.find('a').removeClass('active');
                list_item.addClass('active');
                let id = $(this).data('sub_cat_id');

                $(".cat-overlay-container").fadeIn();
                $.ajaxSetup({
                    headers: {
                        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                    }
                });
                $.ajax({
                    type:'post',
                    url:'/pages/sub-category/'+id,
                    data:{
                        _token: '{{csrf_token()}}'
                    },
                    processData: false,
                    contentType: false, 
                    success:function(data){
                        $("#category_products").html(data.products);
                        setTimeout(() => {
                            $(".cat-overlay-container").fadeOut();
                        }, 2000);
                        show_more();
                    }
                })
            })
        });
    })
    
});
function action_sub_cat(){
    $("#sub-cat-list").each(function(){
        let list = $(this);
        $("#sub-cat-list").find('a').each(function(){
            let list_item = $(this);
            $(this).click(function(){
                list.find('a').removeClass('active');
                list_item.addClass('active');
                let id = $(this).data('sub_cat_id');

                $(".cat-overlay-container").fadeIn();
                $.ajaxSetup({
                    headers: {
                        'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content')
                    }
                });
                $.ajax({
                    type:'post',
                    url:'/pages/sub-category/'+id,
                    data:{
                        _token: '{{csrf_token()}}'
                    },
                    processData: false,
                    contentType: false, 
                    success:function(data){
                        $("#category_products").html(data.products);
                        setTimeout(() => {
                            $(".cat-overlay-container").fadeOut();
                        }, 2000);
                        // show_more();
                    }
                })
            })
        });
    })
}
$(document).ready(function(){
    let pre_min =0;
    $('#price_range').change(function(){
        let range_value = $(this).val()
        let category_id = $("#category-id").data('cat_id');
        let _token = $("input[name=_token]").val(); 
        $.ajax({
            type:'get',
            url:"/pages/price-range",
            data:{
                range_value:range_value,
                category_id:category_id,
                _token: _token
            },
            success:function(data){
                $(".cat-overlay-container").fadeIn();
                $("#category_products").html(data.products);
                setTimeout(() => {
                    $(".cat-overlay-container").fadeOut();
                }, 2000);
                $("#sub-cat-list").html(data.sub_cat);
                action_sub_cat();
                show_more();
               
            }
        });
    });
});
/***************************
 * range controler
 ***************************/
const allRanges = document.querySelectorAll(".range-wrap");
allRanges.forEach(wrap => {
  const range = wrap.querySelector(".range");
  const bubble = wrap.querySelector(".bubble");

  range.addEventListener("input", () => {
    setBubble(range, bubble);
  });
  setBubble(range, bubble);
});

function setBubble(range, bubble) {
  const val = range.value;
  const min = range.min ? range.min : 0;
  const max = range.max ? range.max : 100;
  const newVal = Number(((val - min) * 100) / (max - min));
  bubble.innerHTML = val;

  // Sorta magic numbers based on size of the native UI thumb
  bubble.style.left = `calc(${newVal}% + (${8 - newVal * 0.15}px))`;
}