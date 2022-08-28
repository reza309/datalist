// JavaScript Document
$(document).ready(function(){
	var slide_index = 1;
	var srcAttr = '';
	var count_total_sub_slide_img = $('.m-mag-sub-img-con').length;
	var  sub_image_index = -1;
	var margin = -50;
	/*
	|---------------------------------
	|	change main magnified image
	|	when a sub images clicked
	|---------------------------------
	*/
	$('.m-magnified-sub-img').click(function(){
		slide_index = $(this).data('index');
		srcAttr = $(this).attr('src');
		setMainImage();
	});
	/*
	|---------------------------------
	|	sub galary image previous
	|	btn clickable method
	|---------------------------------
	*/
	$('#m-mg-sub-img-prev-btn').click(function(){
		
//		if( sub_image_index > 0){
//			sub_image_index--;
//		}
		if( sub_image_index < 0){
		   $(this).addClass("m-mg-sub-img-glr-btn-disabled");
			$(this).attr('disabled','true');
			 sub_image_index++;
		  }else{
			$(this).removeClass("m-mg-sub-img-glr-btn-disabled");
			$(this).removeAttr('disabled');
			$('#m-mg-sub-img-next-btn').removeClass("m-mg-sub-img-glr-btn-disabled");
			$('#m-mg-sub-img-next-btn').removeAttr('disabled');
			
			$('.m-mag-sub-img-con:eq('+sub_image_index+')').fadeIn('slow');
			sub_image_index--;
		}
	});
	/*
	|---------------------------------
	|	sub galary image next
	|	btn clickable method
	|---------------------------------
	*/
	$('#m-mg-sub-img-next-btn').click(function(){
		if( sub_image_index < 0){
			sub_image_index++;
		}
		if( sub_image_index > count_total_sub_slide_img-6){
		   $(this).addClass("m-mg-sub-img-glr-btn-disabled");
			$(this).attr("disabled",'true');
			 sub_image_index--;
		  }else{
			$(this).removeClass("m-mg-sub-img-glr-btn-disabled");
			$(this).removeAttr('disabled');
			$('#m-mg-sub-img-prev-btn').removeClass("m-mg-sub-img-glr-btn-disabled");
			$('#m-mg-sub-img-prev-btn').removeAttr('disabled');
			
			$('.m-mag-sub-img-con:eq('+sub_image_index+')').fadeOut('slow');
			sub_image_index++;
		}
	});
	
	/*
	|---------------------------------
	|	set main image when above sub 
	|	images clicked
	|---------------------------------
	*/
	function setMainImage(){
		$('#m-product-view').children().filter('.carousel-inner').
		children().filter('div.carousel-item').each(function(){
			$(this).removeClass('active');
			if( srcAttr == $(this).children().attr('src')){
				$(this).addClass('active');
			}
		});
	}
});