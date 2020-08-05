import { useState, useEffect } from 'react';
import BoxContext from '../contexts/BoxContext';
import CustomErrorPage from '../pages/404';
import Head from 'next/head';

function ContextWrapper({ children, colorScheme }) {
	const [theme, setTheme] = useState(colorScheme);

	useEffect(() => {
		setTheme(colorScheme);
	}, [colorScheme]);

	if (!theme || theme == null) {
		return (
			<>
				<Head>
					<meta name="robots" content="noindex" />
				</Head>
				<CustomErrorPage statusCode={404} />
			</>
		);
	}

	return <BoxContext.Provider value={{ theme }}>{children}</BoxContext.Provider>;
}

export default ContextWrapper;
