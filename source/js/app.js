// Pausing the youtube video when modal is closed
$('#--js-modal-close').on('click', function(e) {
  if ($('#trailer').css('display') === 'block') {
    $('iframe').attr('src', $('iframe').attr('src'));
  };
  $('.--js-nav-link').removeClass('active');
});

$('.--js-nav-link').click(function() {
  $('.--js-nav-link').removeClass('active');
  $(this).addClass('active');
})

// Toggle Humberger Span
$("#toggle").click(function(){
  $(this).toggleClass('on');
  $("#resize").toggleClass("active");
});
