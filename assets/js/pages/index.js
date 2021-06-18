document.addEventListener('DOMContentLoaded', () => {
	const index = document.querySelector('body.index');

	if (!index) return;

	// restart memoji video when hover
	const memojiVideo = index.querySelector('.memoji video');
	const time = 2200; // time of memoji animation

	let previousDate;

	memojiVideo.addEventListener('mouseenter', () => {
		const date = new Date();
		let diff;

		if (previousDate instanceof Date)
			diff = date.getTime() - previousDate.getTime();

		if (diff < time) return; // gap de 3s entre deux hover sur le gif

		memojiVideo.load();

		previousDate = date;
	});
});
