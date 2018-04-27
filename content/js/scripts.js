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
        scrollContainerLeft();
        break;
        
        case 39:
            scrollContainerRight();
        break;

        default: return;
    }
    e.preventDefault();
});

function scrollContainerLeft() {
    $('.product-table-container').animate({ scrollLeft: '-=280' }, 250);
}

function scrollContainerRight() {
    $('.product-table-container').animate({ scrollLeft: '+=280' }, 250);
}