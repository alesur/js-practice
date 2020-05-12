//Size selector

$('button').on('click', function() {
    $('button').removeClass('selected');
    $(this).addClass('selected');
});

// Color selector

$(document).ready(function() {

    $('.info__color input').on('click', function() {

        var tshirtColor = $(this).attr('data-image');

        $('.product-selector__img--active').removeClass('product-selector__img--active');
        $('.product-selector__item img[data-image = ' + tshirtColor + ']').addClass('product-selector__img--active');
        $(this).addClass('product-selector__img--active');
    });

});

//Tab selector

$(document).ready(function() {

    $('.filter__item').on('click', function(e) {
        e.preventDefault();

        var tabSelected = $(this).attr('data');

        $('.filter__item--active').removeClass('filter__item--active');
        $('.tabcontent--active').removeClass('tabcontent--active');

        $('.filter__item[data = ' + tabSelected + ']').addClass('filter__item--active');
        $('.tabcontent[data = ' + tabSelected + ']').addClass('tabcontent--active');

        // $(this).addClass('filter__item--active');
    });

});