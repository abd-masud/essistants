$('.soft-sliders').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    infinity: true,
    speed: 500,
});

$('.testimonials-sliders').slick();

document.getElementById("projectForm").addEventListener("submit", function (event) {
    event.preventDefault();
    event.stopPropagation();
});

document.getElementById("projectMessage").addEventListener("submit", function (event) {
    event.preventDefault();
    event.stopPropagation();
});