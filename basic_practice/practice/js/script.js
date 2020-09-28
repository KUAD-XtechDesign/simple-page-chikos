
$(function(){

    $(".btn").on("click",()=>{
        $("#slide").slideToggle();
    })

    $("#slide").slick({
        dots:true,
        slideToshow:1,
        slidesToScroll:1,
        autoplay:true,
        autoplaySpeed:2000,});

});