$(document).ready(function(){
    let discount_price = 0;
    $('#discount').keyup(function(){
        let sell_price = parseInt($.trim($('#sell_price').val()));
        let purchase_price =  parseInt($.trim($('#purchase_price').val()));
        let discount =   parseInt($.trim($('#discount').val()));
        // console.log(sell_price);
        // console.log(purchase_price);
        if( !isNaN(sell_price)  && !isNaN(purchase_price) && !isNaN(discount)){ 
            console.log(sell_price);
            console.log(purchase_price);
            if(  purchase_price < sell_price){
                let cur_sell_price = Math.ceil(sell_price - ((sell_price * discount)/100));
                let profit_price = cur_sell_price - purchase_price;
                let loss_price = cur_sell_price - purchase_price;
                if( isNaN(purchase_price) || isNaN(sell_price)){
                    $('#current_sell_price').attr('placeholder',"0");
                    $('#profit').attr('placeholder',"0");
                    alert('Sell or  purseches price are not allowed any string and charecters');
                }else{
                    $('#m-loss-con').hide(300);
                    $('#m-profit_con').show(300);
                    if( isNaN(cur_sell_price)){
                        $('#current_sell_price').attr('placeholder',"0");
                        $('#profit').attr('placeholder',"0");
                    }else{
                        $('#current_sell_price').attr('placeholder',cur_sell_price);
                        $('#profit').attr('placeholder',profit_price);
                    }
                    
                    if( cur_sell_price < purchase_price ){
                        $('#warning_price_alert').show(300);
                        $('#m-profit_con').hide(300);
                        $('#m-loss-con').show(300);
                        $('#loss_price').attr("placeholder",(loss_price*(-1)));
                    }else{
                        $('#warning_price_alert').hide(300);
                    }
                }
            }else{
                alert("Your selles price are lowed from purches price please check it");
            }
        }else{
            $('#current_sell_price').attr('placeholder',"0");
            if( purchase_price.length <= 0 || sell_price.length <= 0){
                alert('Sell and purchase price required mandatory');
            }
            if( isNaN(purchase_price) || !isNaN(sell_price)){
                
                alert('Sell or  purseches price are not allowed any string and charecters');
            }
        }
        
    });
});