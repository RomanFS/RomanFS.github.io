$(document).ready(function(){
	$('.slider').slick({
		infinite: true,
		slidesToShow: 2,
		slidesToScroll: 2
	});
});

$(document).ready(function(){

	let items = $(".services-item-ct");
	let radio = $(".services-ct input");

	$(".service").click(function(){		setTimeout(Serv, 10);	});

	function Serv(){

		for(let i = 0; i < radio.length; i++){

			if (radio[i].checked) {

				if (!items[i].classList.contains('active')){

					items[i].classList.add('active');
				} 
			} else {

				if (items[i].classList.contains('active')){

					items[i].classList.remove('active');
				}
			}
		}
	}
});