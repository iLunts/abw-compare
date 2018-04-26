var scrollStep = 280;
// var positionBottomScroll;


$(function () {
    $(window).scroll(function () {
        var winTop = $(window).scrollTop();
        if (winTop >= 400) {
            $("#sticky").addClass("isSticky");
        } else {
            $("#sticky").removeClass("isSticky");
        }
    });
});


$('.product-table-container').scroll(function(){
    $(".compare__sticky-body").scrollLeft($('.product-table-container').scrollLeft());
});


$(document).keydown(function (e) {
    switch (e.which) {
        case 37:
        scrollLeft();
        break;
        
        case 39:
        scrollRight();
        break;

        default: return;
    }
    e.preventDefault();
});

function scrollLeft() {
    $('.product-table-container').animate({ scrollLeft: '-=280' }, 250);
}

function scrollRight() {
    $('.product-table-container').animate({ scrollLeft: '+=280' }, 250);
}