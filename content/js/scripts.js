

var scrollStep = 280;

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
        case 37: // left
        $('.product-table-container').animate({ scrollLeft: '-=280' }, 250);
        console.log($('.product-table-container').scrollLeft());
        break;
        
        case 39: // right
        $('.product-table-container').animate({ scrollLeft: '+=280' }, 250);
        console.log($('.product-table-container').scrollLeft());
        break;

        default: return; // exit this handler for other keys
    }
    e.preventDefault(); // prevent the default action (scroll / move caret)
});

function wheel($div, deltaY) {
    var step = 280;
    var pos = $div.scrollLeft();
    var nextPos = pos + (step * (-deltaY))
    console.log("DelatY: " + deltaY + ", Step: " + step + ", nextPos: " + nextPos);
    $div.scrollLeft(nextPos);
}

$('.product-table-container').bind('mousewheel', function (event, delta, deltaX, deltaY) {
    wheel($(this), deltaY);
    event.preventDefault();
});