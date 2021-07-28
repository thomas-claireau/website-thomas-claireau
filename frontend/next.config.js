const path = require('path');

module.exports = (phase, { defaultConfig }) => {
	/**
	 * @type {import('next').NextConfig}
	 */
	const nextConfig = {
		/* config options here */
		sassOptions: {
			includePaths: [path.join(__dirname, 'src', 'styles')],
			prependData: `@import "styles/_variables.scss";`,
		},
	};
	return nextConfig;
};
