document.addEventListener('DOMContentLoaded', () => {
	const header = document.querySelector('header');

	if (!header) return;

	// header scroll
	window.addEventListener('scroll', () => {
		if (window.scrollY > 0) {
			header.classList.add('scrolled');
		} else {
			header.classList.remove('scrolled');
		}
	});

	// toggle theme
	const toggleTheme = header.querySelector('.toggle-theme');

	toggleTheme.addEventListener('click', () => {
		toggleTheme.classList.toggle('light');
		toggleTheme.classList.toggle('dark');
	});
});
