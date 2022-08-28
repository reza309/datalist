// JavaScript Document
document.addEventListener('DOMContentLoaded',function(){
    var secondary_nav_item = document.getElementById('secondary-nav');
    window.onscroll = function(){
      secondary_nav();  
    };
    function secondary_nav(){
        if(window.pageYOffset>200){
            secondary_nav_item.classList.add('secondary-nav-sticy');
            secondary_nav_item.classList.remove('secondary-nav-sticy-out');
        }else{
            secondary_nav_item.classList.remove('secondary-nav-sticy');
            secondary_nav_item.classList.add('secondary-nav-sticy-out');
        }
    }
    /**************************************
     * code for bootstrap paging style
     **************************************/
    $(document).ready(function(){
        $('.pagination').addClass('pagination-sm');
    })
});