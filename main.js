(function(document){

    var mySwiper = new Swiper('.swiper-container', {
        slidesPerView: 'auto',
        spaceBetween: 20,
        loop: true,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

})(document);

function de(encoded) {    
    var address = atob(encoded);
    window.location.href = 'mailto:' + address;   
}