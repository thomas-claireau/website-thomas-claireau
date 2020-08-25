const path = require('path');
const withReactSvg = require('next-react-svg');

module.exports = withReactSvg({
	include: path.resolve(__dirname, 'public/assets/img'),
	webpack(config) {
		config.resolve.alias['components'] = path.join(__dirname, 'components');
		config.resolve.alias['public'] = path.join(__dirname, 'public');
		config.resolve.alias['node_modules'] = path.join(__dirname, 'node_modules');
		config.resolve.alias['contexts'] = path.join(__dirname, 'contexts');
		config.resolve.alias['utils'] = path.join(__dirname, 'utils');

		return config;
	},
	env: {
		API_URL: process.env.API_URL,
	},
});
