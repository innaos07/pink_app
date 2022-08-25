$(document).ready(function(){

    const prevSlider = $('#slider-prev');
    const nextSlider = $('#slider-next');
    const sliders = $('.slider__item');
    const paginationItem = $('.pagination__item');
    let count = 1;

    if(sliders.length <= 1) {
        prevSlider.addClass('visually-hidden');
        nextSlider.addClass('visually-hidden');
    } else {
        prevSlider.removeClass('visually-hidden');
        nextSlider.removeClass('visually-hidden');
    }

    paginationItem.each(function() {
        if(Number($(this).attr('data-count')) > sliders.length) {
            $(this).addClass('pagination__item--disabled')
        console.log($(this))
         }
    })

    paginationItem.click(function() {
        count = Number($(this).attr('data-count'));
        if(count > sliders.length) {
            
            return false
        }
        showSlides();
        console.log(count, sliders.length)
    })

    nextSlider.click(function() {
        count = count === sliders.length ? 1 : count + 1;
        showSlides();
    })

    prevSlider.click(function() {
        count = count === 1 ? sliders.length : count - 1;
        showSlides();
    })

    function showSlides() {
        sliders.removeClass('slider__item--current');
        $(sliders[count-1]).addClass('slider__item--current');

        paginationItem.removeClass('pagination__item--current');
        $(paginationItem[count-1]).addClass('pagination__item--current');
    }
})

