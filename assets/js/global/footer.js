document.addEventListener('DOMContentLoaded', () => {
	const footerDate = document.querySelector('footer .date');

	if (footerDate) {
		const now = new Date();
		footerDate.innerHTML = now.getFullYear();
	}
});
