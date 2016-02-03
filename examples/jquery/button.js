var $product = $('.product');

$product.on('click', '.button', function(e) {
  console.log("this: ", this);

  $.ajax({});
});
