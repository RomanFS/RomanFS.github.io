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

document.getElementsByClassName('right')[0].onclick = function() {	
	let lastIndex = index.pop();
	index.unshift(lastIndex);

	for(let i = 0; i < items.length; i++) {
		items[i].style.transform = 'translateX('+ index[i] + '%)';
	}
}

document.getElementsByClassName('left')[0].onclick = function() {	

	let lastIndex = index.shift();
	index.push(lastIndex);

	for(let i = 0; i < items.length; i++) {
		items[i].style.transform = 'translateX('+ index[i] + '%)';
	}
}