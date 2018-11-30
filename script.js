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

let items = document.getElementsByClassName('slider-item');

document.getElementsByClassName('right')[0].onclick = function() {	

	for(let i = 0; i < items.length; i++) {
		let change = (i-1)*100;
		items[i].style.transform = 'translateX('+ change + '%)';
	}

	let lastItem = items.pop();
	
	items.shift(lastItem); 
}
