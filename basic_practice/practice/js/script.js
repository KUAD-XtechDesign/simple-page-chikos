
$(function(){

    

    $("#slide").slick({dots:true});
    $('.autoplay').slick({
        slidesToshow: 1,
        slidesToscroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    });

});