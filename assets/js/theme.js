// Custome theme code

if ($('.clean-gallery').length > 0) {
   baguetteBox.run('.clean-gallery', { animation: 'slideIn'});
}

if ($('.clean-product').length > 0) {
    $(window).on("load",function() {
        $('.sp-wrap').smoothproducts();
    });
}

$('.tofigure').each(function() {
    $(this).replaceWith($('<figure class="img-with-caption tofigure">' + this.innerHTML + '</figure>'));
});
$('.tofigure').children('img').each(function() {
    var caption;
    caption = $(this).attr('title');
    $(this).after('<figcaption class="caption">' + caption + '</figcaption>');
});

