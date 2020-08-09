import { useState, useEffect } from 'react';
import BoxContext from '../contexts/BoxContext';
import CustomErrorPage from '../pages/404';
import Head from 'next/head';

function ContextWrapper({ children, colorScheme, globalInformations }) {
	const [theme, setTheme] = useState(colorScheme);
	const [informations, setInformations] = useState(globalInformations);

	useEffect(() => {
		setTheme(colorScheme);
	}, [colorScheme]);

	useEffect(() => {
		setInformations(globalInformations);
	}, [globalInformations]);

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

	return (
		<BoxContext.Provider value={{ theme, global_informations: globalInformations }}>
			{children}
		</BoxContext.Provider>
	);
}

export default ContextWrapper;
