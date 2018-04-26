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