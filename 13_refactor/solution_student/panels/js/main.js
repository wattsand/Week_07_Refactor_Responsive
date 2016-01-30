//hide all articles on page load

//show just the #home article

//when user clicks on list item in nav

//remove current active classes from active li

//add active class to the li clicked on

//fade out the articile that is visible

//fade in the article with the id that corresponds to the 
//date-attr. of the li clicked on


$('.panel').hide();

$('#home').show();

$('nav li').on('click', function(){
	$('li.active').removeClass('active');
	$(this).addClass('active');
	$('.panel').hide(500);
	var thisArticle = $(this).children().data('panel');
	$('#' + thisArticle).fadeIn(500);
});

