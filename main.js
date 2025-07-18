window.addEventListener('DOMContentLoaded', () => {
	const header = document.querySelector('header');
	if (header) {
		header.animate([
			{ opacity: 0, transform: 'translateY(-30px)' },
			{ opacity: 1, transform: 'translateY(0)' }
		], {
			duration: 900,
			easing: 'cubic-bezier(.5,1.8,.5,1)',
			fill: 'forwards'
		});
	}
	const cards = document.querySelectorAll('main li');
	cards.forEach((card, i) => {
		card.animate([
			{ opacity: 0, transform: 'translateY(20px)' },
			{ opacity: 1, transform: 'translateY(0)' }
		], {
			duration: 600 + i * 100,
			fill: 'forwards',
			easing: 'cubic-bezier(.5,1.8,.5,1)'
		});
	});
});
