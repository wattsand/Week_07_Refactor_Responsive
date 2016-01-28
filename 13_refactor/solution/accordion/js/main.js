// When the user clicks on a dt
$('dt').on('click', function() {
  // Remove active class from all the dts
  $('dt.active').removeClass('active');
  // Slide up all the dds
  $('dd').slideUp(250);
  // Add the active class to the item the user clicked on
  $(this).addClass('active');
  // Slide down the next dd
  $(this).next('dd').slideDown(250);
});