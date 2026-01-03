/*Tabs*/

const nav = document.getElementById('nav');
const navToggle = document.querySelector('.nav-responsive');

if (nav && navToggle) {
	navToggle.addEventListener('click', () => {
		nav.classList.toggle('is-open');
	});

	nav.querySelectorAll('a').forEach((link) => {
		link.addEventListener('click', () => {
			nav.classList.remove('is-open');
		});
	});
}

document.querySelectorAll('.tabs').forEach((tabsBlock) => {
	const tabs = tabsBlock.querySelectorAll('.tabs-toggle');
	const contents = tabsBlock.querySelectorAll('.tabs-content');

	if (tabs.length && contents.length) {
		tabs[0].classList.add('is-active');
		contents[0].classList.add('is-active');
	}

	tabs.forEach((tab, index) => {
		tab.addEventListener('click', () => {
			contents.forEach((content) => {
				content.classList.remove('is-active');
			});
			tabs.forEach((tab) => {
				tab.classList.remove('is-active');
			});

			if (contents[index]) {
				contents[index].classList.add('is-active');
			}
			tab.classList.add('is-active');
		});
	});
});




/* CONTACT */

const form = document.getElementById('form');
const inputs = document.querySelectorAll('#form input');

const expresions = {
	name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, 
	mail: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	tel: /^\(?([0-9]{2})\)?[-. ]?([0-9]{2})[-. ]?([0-9]{2})[-. ]?([0-9]{2})[-. ]?([0-9]{2})$/,
	msgtxt: /^[A-za-z0–9_]{1,300}$/
}

const fields = {
	surname: false,
	name: false,
	email: false,
	tel: false,
	msgtxt: false
}

const validateForm = (e) => {
	switch(e.target.name){
		case "surname":
			validateField(expresions.name, e.target, 'surname')
		break;
		case "name":
			validateField(expresions.name, e.target, 'name')
		break;
		case "email":
			validateField(expresions.mail, e.target, 'email')
		break;
		case "tel":
			validateField(expresions.tel, e.target, 'tel')
		break;
		case "msgtxt":
			validateField(expresions.msgtxt, e.target, 'msgtxt')
		break;
	}
}

const validateField = (expresion, input, field) => {
	if (expresion.test(input.value)){
		document.getElementById(`group-${field}`).classList.remove('form-group-incorrect');
		document.getElementById(`group-${field}`).classList.add('form-group-correct');
		document.querySelector(`#group-${field} i`).classList.add('fa-check-circle');
		document.querySelector(`#group-${field} i`).classList.remove('fa-times-circle');
		document.querySelector(`#group-${field} .form-input-error`).classList.remove('form-input-error-active');
		fields[field] = true;
	} else {
		document.getElementById(`group-${field}`).classList.add('form-group-incorrect');
		document.getElementById(`group-${field}`).classList.remove('form-group-correct');
		document.querySelector(`#group-${field} i`).classList.add('fa-times-circle');
		document.querySelector(`#group-${field} i`).classList.remove('fa-check-circle');
		document.querySelector(`#group-${field} .form-input-error`).classList.add('form-input-error-active');
		fields[field] = false;

	}
}

inputs.forEach((input) => {
	input.addEventListener('keyup', validateForm);
	input.addEventListener('blur', validateForm);
});

form.addEventListener('submit', (e) => {
	e.preventDefault(); // ENVOI RIEN

	//const cg = document.getElementById('cg')
	if(fields.name){
		form.reset();
	}
});

// FORMULAIRE POP UP

function toggle(){
	var blur = document.getElementById('blur');
	blur.classList.toggle('active');
	var popup = document.getElementById('popup');
	popup.classList.toggle('active');
	document.addEventListener('keydown', function(event) {
		const key = event.key; // const {key} = event; in ES6+
		if (key === "Escape") {
			blur.classList.toggle('active');
			popup.classList.toggle('active');
		}
	});
}

// SCROLL BAR

let progress = document.getElementById('progressbar');
let totalHeight = document.body.scrollHeight - window.innerHeight;
window.onscroll = function(){
	let progressHeight = (window.pageYOffset / totalHeight) * 100;
	progress.style.height = progressHeight + "%";
}
