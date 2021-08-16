const basicAuth = require('express-basic-auth');
require('dotenv').config();

const { API_ADMIN_USERNAME, API_ADMIN_PASSWORD } = process.env;

function myAuthorizer(username, password) {
	const userMatches = basicAuth.safeCompare(username, API_ADMIN_USERNAME);
	const passwordMatches = basicAuth.safeCompare(password, API_ADMIN_PASSWORD);

	return userMatches & passwordMatches;
}

module.exports = basicAuth({
	authorizer: myAuthorizer,
});
