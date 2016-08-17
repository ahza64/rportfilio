Turbolinks.enableProgressBar();

$(document).ready(function() {
  console.log("document ready, js loaded");

  $('.link').on('click', function(event){
    console.log("link clicked");
    $(this).append('<div class="alert alert-info" role="alert">Wait 10 seconds. My free standby servers are warming up.</div>');
  });


});
