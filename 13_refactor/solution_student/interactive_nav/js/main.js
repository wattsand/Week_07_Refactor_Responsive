//when use clicks on link in nav

//check if the link clicked is already active

//if active class, then remove it

//slide up the sub-nav panel

//if the link clicked does not have an active class (Default state)

//then add the active class to link clicked

//slide down the sub-nav area

//display corresponding nav panel sections

//set up a variable to store the date-related panel value
//oof the link we clicked on

//make a selection by concatenating the # with the
//data-related panel value, to select and show the related section

$('#main-nav a').on('click', function () {

  if ($(this).hasClass('active')) {

    $(this).removeClass('active');

    $('#slide-down').slideUp();

  } else {

    $('#main-nav a').removeClass('active');

    $(this).addClass('active');

    $('#slide-down').slideDown();
    
    $('.nav-panel').hide();

    var sectionToShow = $(this).data('related-panel');

    $('#' + sectionToShow).show();    
  }


});