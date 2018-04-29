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

        // Scroll to bottom end
        if ($(window).scrollTop() + $(window).height() == $(document).height()) {
            $("#js-scroll-to-bottom").attr("disabled", true);
        } else {
            $("#js-scroll-to-bottom").attr("disabled", false);
        }
    
        // Scroll to top end
        if ($(window).scrollTop() == 0) {
            $("#js-scroll-to-top").attr("disabled", true);
        } else {
            $("#js-scroll-to-top").attr("disabled", false);
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

// ------------------------
// Function for scrolling 
// ------------------------
function scrollContainerLeft() {
    $('.product-table-container').animate({ scrollLeft: '-=280' }, 250);
}

function scrollContainerRight() {
    $('.product-table-container').animate({ scrollLeft: '+=280' }, 250);
}

function scrollToTop() {
    $(window).animate({
        scrollTop: 0
    }, 350);    
}

function scrollToBottom() {
    $(window).animate({
        scrollTop: document.body.scrollHeight
    }, 350);    
}

var collapseTableInnerText = $('.product-table__title-inner-text');
var collapseTableGroup = $('.product-table__group');

$(collapseTableInnerText).click(function () {

    if ($(this).closest(collapseTableGroup).hasClass('product-table__group--collapse')){
        $(this).closest(collapseTableGroup).removeClass('product-table__group--collapse');
    }
    else{
        $(this).closest(collapseTableGroup).addClass('product-table__group--collapse');
    }
});


$(document).ready(function () {
    $('.js-show-modal-graph').magnificPopup({
        type: 'inline',

        fixedContentPos: false,
        fixedBgPos: true,

        overflowY: 'auto',

        closeBtnInside: true,
        preloader: false,

        midClick: true,
        removalDelay: 300,
        mainClass: 'my-mfp-zoom-in'
    });
});
