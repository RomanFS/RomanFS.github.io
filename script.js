const time_delay_animation = 500; // see in CSS
const time_delay_spare = 100; // to your taste

document.getElementsByClassName('service-labels')[0].onclick = function() {
	let radio = this.getElementsByTagName('input');
	let items = document.getElementsByClassName('services-item-ct');

	for(let i = 0; i < radio.length; i++) {
		if (radio[i].checked) {
			items[i].className += ' active'; 
		} else {			
			items[i].className = 'services-item-ct'; 
		}
	}
}

//let left_but = document.getElementsByClassName('left')[0];
//let right_but = document.getElementsByClassName('right')[0];

let index = [-100, 0, 100, 200];
let items = document.getElementsByClassName('slider-item');

for(let i = 0; i < items.length; i++){
	items[i].setAttribute('screlement', i);
}

document.getElementsByClassName('right')[0].onclick = function() {
	let this_button = document.getElementsByClassName('right')[0];
	for(let i = 0; i < items.length; i++) {
		let current_pos = parseInt(items[i].getAttribute('screlement'));
		if(parseInt(items[i].getAttribute('screlement')) >= items.length-1){
			current_pos = 0;
			items[i].setAttribute('screlement', current_pos);
			items[i].style.display = 'none';

			this_button.setAttribute('disabled', 'disabled');
			setTimeout(function(){
				items[i].style.display = 'block';
				this_button.removeAttribute('disabled');
			}, time_delay_animation+time_delay_spare);
		}else{
			current_pos++;
			items[i].setAttribute('screlement', current_pos);
		}

		items[i].style.transform = 'translateX('+ (current_pos-1)*100 + '%)';
	}
}

document.getElementsByClassName('left')[0].onclick = function() {
	let this_button = document.getElementsByClassName('left')[0];
	for(let i = 0; i < items.length; i++) {
		let current_pos = parseInt(items[i].getAttribute('screlement'));
		if(parseInt(items[i].getAttribute('screlement')) <= 0){
			current_pos = items.length-1;
			items[i].setAttribute('screlement', current_pos);
			items[i].style.display = 'none';

			this_button.setAttribute('disabled', 'disabled');
			setTimeout(function(){
				items[i].style.display = 'block';
				this_button.removeAttribute('disabled');
			}, time_delay_animation+time_delay_spare);
		}else{
			current_pos--;
			items[i].setAttribute('screlement', current_pos);
		}

		items[i].style.transform = 'translateX('+ (current_pos-1)*100 + '%)';
	}
}