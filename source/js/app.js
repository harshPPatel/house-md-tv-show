// Pausing the youtube video when modal is closed
$('#--js-modal-close').on('click', function(e) {
  if ($('#trailer').css('display') === 'block') {
    $('iframe').attr('src', $('iframe').attr('src'));
  };
});
