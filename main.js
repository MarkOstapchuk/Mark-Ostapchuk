$(document).ready(function(){

$(function(){
  $('a[href^="#"]').on('click', function(event) {
    // отменяем стандартное действие
    event.preventDefault();
    
    var sc = $(this).attr("href"),
        dn = $(sc).offset().top;

    $('html, body').animate({scrollTop: dn}, 1000);
  });
});
let $invissible = $(".portfolio__items__invissible");
$(".show__more__btn").on('click', function(e){
    if ($invissible.css("display") === "none") {
        $(this).attr("href", "#invissible");
        $invissible.css("display", "flex");
        $(this).text("Спрятать");
    } else {
        $(this).attr("href", "#portfolio");
        $invissible.css("display", "none");
        $(this).text("показать больше");
    }
});


});