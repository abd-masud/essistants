$('.soft-sliders').slick({
    dots: false,
    autoplay: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
    responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 5,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 4,
                slidesToScroll: 1,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1,
            }
        },
    ]
});

$('.testimonials-sliders').slick({
    dots: true,
    autoplay: true,
    infinite: true,
    arrows: true,
    prevArrow: '<span class="prev-arrow"><i class="fa-solid fa-angle-left"></i></span>',
    nextArrow: '<span class="next-arrow"><i class="fa-solid fa-angle-right"></i></span>',
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 2000,
});

document.getElementById("projectForm").addEventListener("submit", function (event) {
    event.preventDefault();
    event.stopPropagation();
});

document.getElementById("projectMessage").addEventListener("submit", function (event) {
    event.preventDefault();
    event.stopPropagation();
});