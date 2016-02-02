

if ($('.button').length > 0) {

  $('.button').on('click', function() {

    $(this)
      .parent('.popup')
      .removeClass('.popup_open');

    $('.some-value').text($(this).text());

  });

}
