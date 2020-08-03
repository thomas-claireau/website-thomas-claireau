import { useState } from 'react';
import BoxContext from '../contexts/BoxContext';
import DefaultErrorPage from 'next/error';
import { Head } from 'next/document';

function ContextWrapper({ children, colorScheme }) {
	const [theme] = useState(colorScheme);

	if (!theme) {
		return (
			<>
				<DefaultErrorPage statusCode={404} />
			</>
		);
	}

	return <BoxContext.Provider value={{ theme }}>{children}</BoxContext.Provider>;
}

export default ContextWrapper;
