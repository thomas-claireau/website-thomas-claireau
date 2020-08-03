import { useState } from 'react';
import BoxContext from '../contexts/BoxContext';

function ContextWrapper({ children, colorScheme }) {
	const [theme] = useState(colorScheme);

	if (!theme) return null;

	return <BoxContext.Provider value={{ theme }}>{children}</BoxContext.Provider>;
}

export default ContextWrapper;
