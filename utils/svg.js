import React, { useEffect, useState } from 'react';

export default function Svg({ url }) {
	const [svg, setSvg] = useState(null);
	const [isLoaded, setIsLoaded] = useState(false);
	const [isErrored, setIsErrored] = useState(false);

	useEffect(() => {
		fetch(url)
			.then((res) => res.text())
			.then(setSvg)
			.catch(setIsErrored)
			.then(() => setIsLoaded(true));
	}, [url]);

	return (
		<div
			className={`svg-container svg-container--${isLoaded ? 'loaded' : 'loading'} ${
				isErrored ? 'svg-container--errored' : ''
			}`}
			dangerouslySetInnerHTML={{ __html: svg }}
		/>
	);
}
