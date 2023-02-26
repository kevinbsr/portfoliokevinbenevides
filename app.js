// Smooth scrolling
const links = document.querySelectorAll('nav a');

for (const link of links) {
	link.addEventListener('click', clickHandler);
}

function clickHandler(e) {
	e.preventDefault();
	const href = this.getAttribute('href');
	const offsetTop = document.querySelector(href).offsetTop;

	scroll({
		top: offsetTop,
		behavior: "smooth"
	});
}

// Form submission
const form = document.querySelector('form');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');

form.addEventListener('submit', (e) => {
	e.preventDefault();

	const formData = new FormData(form);
	const name = formData.get('name');
	const email = formData.get('email');
	const message = formData.get('message');

	// Send data to server
	// ...

	// Reset form
	nameInput.value = '';
	emailInput.value = '';
	messageInput.value = '';
});

ScrollReveal({
	origin: 'top',
	distance: '15px',
	duration: 700
}).reveal(`
header h1, 
nav, 
section, 
.card,
#skills li
`)