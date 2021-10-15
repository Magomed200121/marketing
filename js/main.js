$(function() {
    var mixer = mixitup('.portfolio__content');
    $('.slider__iner').slick({
        
    });

});

ScrollReveal({reset: true}).reveal('.title', {delay: 100});

anime({
    targets: '.logo',
    translateX: 3
});

let menuactive = document.querySelector('.menu__active')
let menulist = document.querySelector('.menu__list')
menuactive.addEventListener('click', function(){
    menulist.classList.toggle('popy')
})
