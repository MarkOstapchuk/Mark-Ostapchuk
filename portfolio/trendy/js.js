$(document).ready(function(){
$('.slider').slick({
  slidesToShow: 3,
  variableWidth: false,
  slidesToScroll: 3,
  dots: true,
   prevArrow: '<button id="prev" type="button"></button>',
   nextArrow: '<button id="next" type="button"></button>'
});
$('.slider__2').slick({
  slidesToShow: 1,
  variableWidth: false,
  slidesToScroll: 1,
  dots: true,
  arrows: false,
   prevArrow: '<button id="prev__2" type="button"></button>',
   nextArrow: '<button id="next__2" type="button"></button>'
});
 $('a[href^="#"]').on('click', function(event) {
    
    event.preventDefault();    
    var sc = $(this).attr("href"),
        dn = $(sc).offset().top;

    $('html, body').animate({scrollTop: dn}, 1000);

  });

let btn = document.querySelector('#knopka')
//
function magic() {
  if (window.pageYOffset > 20) {
    btn.style.opacity = '1'
  } else { btn.style.opacity = '0' }
}
//
btn.onclick = function () {
  window.scrollTo(0,0)
}

// When scrolling, we run the function
window.onscroll = magic
});