// JavaScript Document
$(document).ready(function(){
   $('#cash-on-delivery').click(function(){
       if($(this).is(':checked')){
           $('#cashOnDelivery').fadeIn('slow');
       }else{
           $('#cashOnDelivery').fadeOut('slow');
       }
        if($('#bkash-payment').is(':checked')){
            $('#bkash').fadeIn('slow');
        }else{
            $('#bkash').fadeOut('slow');
        }
       
   }); 
   /********************************
    * bkash payment
    *******************************/
   $('#bkash-payment').click(function(){
        if($("#cash-on-delivery").is(':checked')){
            $('#cashOnDelivery').fadeIn('slow');
        }else{
            $('#cashOnDelivery').fadeOut('slow');
        }

        if($(this).is(':checked')){
            $('#bkash').fadeIn('slow');
        }else{
            $('#bkash').fadeOut('slow');
        }
    });
});