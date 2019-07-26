$('#toggle').click(function() {
  $('.circle-loader')
    .removeClass('load-error')
    .toggleClass('load-complete');
  $('.checkmark')
    .removeClass('error')
    .addClass('draw')
    .toggle();
});
$('#toggle-error').click(function() {
  $('.circle-loader')
    .removeClass('load-complete')
    .toggleClass('load-error');
  $('.checkmark')
    .removeClass('draw')
    .addClass('error')
    .toggle();
});
