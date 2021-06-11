document.addEventListener('DOMContentLoaded', () => {
	const index = document.querySelector('body.index');

	if (!index) return;

	// restart memoji gif when hover
	const memojiGif = index.querySelector('.memoji img');
	const time = 2200; // time of memoji animation

	let previousDate;

	memojiGif.addEventListener('mouseenter', () => {
		const date = new Date();
		let diff;

		if (previousDate instanceof Date)
			diff = date.getTime() - previousDate.getTime();

		if (diff < time) return; // gap de 3s entre deux hover sur le gif

		const src = memojiGif.src;
		memojiGif.src = src;

		previousDate = date;
	});
});
