// this is the animation file for nav related items


$(document).ready(()=> {

  $('.search-input').focusin(()=> {
    $('.search-icon').css('left', '250px');
  }); // end focus event for search input

  $('.search-input').focusout(()=> {
    $('.search-icon').css('left', '30px');
  }); // end leave focus event for search input

});
