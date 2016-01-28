// Hide all the articles on page load
$('article').hide();
// Show the first one to start with
$('article:first').show();

$('nav li').on('click', function() {
  // BONUS - Only fade out/fade in stuff if the tab clicked on is not already active
  if (!$(this).hasClass('active')) {
    $('li.active').removeClass('active');
    $('article').hide();
    $(this).addClass('active');

    var targetId = $(this).find('a').data('panel');
    $('#' + targetId).fadeIn(500);
  }
});