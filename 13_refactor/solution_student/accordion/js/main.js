//when user clicks any dt
//hide currently active dd
//remove the active class
//add active class to the dt clicked on
//expose the corresponding dd


$('dt').on( 'click', function(){
	$('dd').slideUp('slow');
	$('dt').removeClass('active');
	$(this).addClass('active');
	$(this).next().slideDown('slow');
});