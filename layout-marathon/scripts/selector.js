$('button').on('click', function() {
    $('button').removeClass('selected');
    $(this).addClass('selected');
});

$(document).ready(function() {


    $('.info__color input').on('click', function() {

        var tshirtColor = $(this).attr('data-image');
        console.log(tshirtColor);

        $('.product-selector__img--active').removeClass('product-selector__img--active');
        $('.product-selector__item img[data-image = ' + tshirtColor + ']').addClass('product-selector__img--active');
        $(this).addClass('product-selector__img--active');
    });

});