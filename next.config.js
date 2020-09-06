const path = require('path');
const withReactSvg = require('next-react-svg');

module.exports = withReactSvg({
	sassOptions: {
		prependData: `
			@import "styles/_vars.scss";
		`,
	},
	include: path.resolve(__dirname, 'public/assets/img'),
	webpack(config) {
		config.resolve.alias['components'] = path.join(__dirname, 'components');
		config.resolve.alias['public'] = path.join(__dirname, 'public');
		config.resolve.alias['styles'] = path.join(__dirname, 'styles');
		config.resolve.alias['node_modules'] = path.join(__dirname, 'node_modules');
		config.resolve.alias['pages'] = path.join(__dirname, 'pages');
		config.resolve.alias['contexts'] = path.join(__dirname, 'contexts');
		config.resolve.alias['utils'] = path.join(__dirname, 'utils');
		config.resolve.alias['libs'] = path.join(__dirname, 'libs');
		config.resolve.alias['apollo'] = path.join(__dirname, 'apollo');

		return config;
	},
	env: {
		API_URL: process.env.API_URL,
		GITHUB_API: process.env.GITHUB_API,
		GITHUB_USER: process.env.GITHUB_USER,
		GITHUB_TOKEN: process.env.GITHUB_TOKEN,
	},
});
