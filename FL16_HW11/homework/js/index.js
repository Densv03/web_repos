function visitLink(path) {
	let temp = parseInt(localStorage.getItem(path)) + 1;
	localStorage.setItem(path, temp.toString());
	console.log(localStorage[path]);
}
let counter = 0;

function viewResults() {
	let div = document.getElementById('content'),
		ul = document.createElement('ul'),
		li1 = document.createElement('li'),
		li2 = document.createElement('li'),
		li3 = document.createElement('li');
	li1.innerHTML = `You visited Page1 ${localStorage['Page1']} time(s)`;
	li2.innerHTML = `You visited Page2 ${localStorage['Page2']} time(s)`;
	li3.innerHTML = `You visited Page3 ${localStorage['Page3']} time(s)`;
	if (!counter) {
		div.appendChild(ul);
		ul.append(li1);
		ul.append(li2);
		ul.append(li3);
	}
}