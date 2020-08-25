import { useState, useEffect } from 'react';
import BoxContext from 'contexts/BoxContext';

function ContextWrapper({ children, colorScheme, global }) {
	const [theme, setTheme] = useState(colorScheme);

	useEffect(() => {
		setTheme(colorScheme);
	}, [colorScheme]);

	return <BoxContext.Provider value={{ theme, global }}>{children}</BoxContext.Provider>;
}

export default ContextWrapper;
