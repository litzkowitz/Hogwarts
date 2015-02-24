$(function() {
	    $('.default').click(function(){
	    	$('.default').not(this).removeClass('active');
	    	$('.default').not(this).addClass('inactive');
	        $(this).addClass('active');
	    });
 });