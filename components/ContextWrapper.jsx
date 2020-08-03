import { useState } from 'react';
import BoxContext from '../contexts/BoxContext';

function ContextWrapper({ children, colorScheme }) {
	const [theme] = useState(colorScheme);

	return <BoxContext.Provider value={{ theme }}>{children}</BoxContext.Provider>;
}

export default ContextWrapper;
