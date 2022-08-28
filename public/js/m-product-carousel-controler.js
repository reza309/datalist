// JavaScript Document
/*
|--------------------------------------
|  this jQuery method control
|   carousel index page
|--------------------------------------
*/
$(document).ready(function(){
    /*
    |-------------------------------------------
    |   control carousel previous icon/button
    |-------------------------------------------
    */
    $('.carousel-control-prev').click(function(){
        var id = $(this).attr("href");
        $(id).carousel({
            push:true,
            interval:false
        });
    });
    /*
    |--------------------------------------------------
    |   control carousel next icon/button
    |-------------------------------------------------
    */
    $('.carousel-control-next').click(function(){
       var id = $(this).attr('href');
        $(id).carousel({
           push:true,
            interval:false
        });
    });
});