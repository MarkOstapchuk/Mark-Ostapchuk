
function LoadMore() {
	let btn = document.getElementById("portfolio-btn");
	let hidentext = document.getElementById("portfolio-project-hiden");
	if (hidentext.style.display === 'block') {
		hidentext.style.display = "none";
		btn.innerHTML="load more";
		btn.href = '#yakor';
	} else {
		hidentext.style.display = "block";
		btn.innerHTML="hide";
		btn.href = '#portfolio-project-hiden';
	};
};
$( document ).ready(function() {
    $(function(){
  $('a[href^="#"]').on('click', function(event) {
    event.preventDefault();
    var sc = $(this).attr("href"),
        dn = $(sc).offset().top;
    $('html, body').animate({scrollTop: dn}, 1000);
  });
});
});
$( document ).ready(function() {
    $(".test-slider").slick({
        dots:true,
        arrows: false,
        initialSlide: 1,
    });
});
$(document).ready(function() {
    $(".menu-btn").click(function(event) {
        $(".nav-list").toggleClass("active");
        $(".menu-btn").toggleClass("menu-btn_active");
    });
});
let submit = document.getElementById("submit");
let name = document.getElementById("name");
name.addEventListener("click", send());
    function send(){
    
    submit.innerHTML = "hello";
    submit.toggleClass= "hello";
};
