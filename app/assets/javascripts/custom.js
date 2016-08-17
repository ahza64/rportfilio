Turbolinks.enableProgressBar();

$(document).ready(function() {
  console.log("document ready, js loaded");

  $('.link').on('click', function(event){
    console.log("link clicked");
    $(this).replaceWith('<div class="alert alert-info" role="alert">Please wait up to 10 seconds. My free standby servers are warming up.</div>');
  });


});
