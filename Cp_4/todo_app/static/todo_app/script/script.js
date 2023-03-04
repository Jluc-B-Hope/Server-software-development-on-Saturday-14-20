$(document).ready(function(){
    $('.slider').slick({
        prevArrow: `<div class="slick-prev"><img src="${DJANGO_BASE_URL}online_shop/images/left-arrow.svg" style="width:50px"/></div>`,
        nextArrow: `<div class="slick-next"><img src="${DJANGO_BASE_URL}online_shop/images/right-arrow.svg" style = "width:50px"/></div>`
    });
});
