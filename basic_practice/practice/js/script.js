
$(function(){

    $(".btn").on("click",()=>{
        $("#slide").slideToggle();
    })

    $("#slide").slick({dots:true});

});