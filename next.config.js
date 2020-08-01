const path = require('path');

module.exports = {
	webpack: (config) => {
		config.resolve.alias['components'] = path.join(__dirname, 'components');
		config.resolve.alias['public'] = path.join(__dirname, 'public');
		config.resolve.alias['node_modules'] = path.join(__dirname, 'node_modules');

		return config;
	},
};
