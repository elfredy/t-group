$(document).ready(function(){
	$('.homeServicesCard').click(function(e){
		var tab_id = $(this).attr('data-tab');

		$('.homeServicesCard').removeClass('current');
		$('.serviceContent').removeClass('current');

		$(this).addClass('current');
        $("#"+tab_id).addClass('current');
        
        e.preventDefault();
	});
	

	$('.services__mobilopen').click(function(){
		$(this).toggleClass('openMenu');
	})

});