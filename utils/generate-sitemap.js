const fs = require('fs');
const fetch = require('isomorphic-unfetch');
const globby = require('globby');
const urls = [];
const FRONT_URL = process.env.FRONT_URL || 'https://thomas-claireau.com';
const API_URL = process.env.API_URL || 'https://api.thomas-claireau.com';

(async () => {
	// Ignore Next.js specific files (e.g., _app.js) and API routes.
	const pages = await globby(['pages/**/*{.jsx,.mdx}', '!pages/_*.jsx', '!pages/api']);

	pages.map((page) => {
		if (page.includes('[slug]') || page.includes('404')) return;

		const path = page.replace('pages', '').replace('.jsx', '').replace('.mdx', '');
		const route = path === '/index' ? '' : path;

		urls.push(`<url><loc>${`${FRONT_URL}${route}`}</loc></url>`);
	});

	// fetch all projects
	await fetch(`${API_URL}/projets`)
		.then((res) => res.json())
		.then((data) => {
			data.forEach((item) => {
				urls.push(`<url><loc>${`${FRONT_URL}/projets/${item.slug}`}</loc></url>`);
			});
		});

	// fetch all blog posts
	await fetch(`${API_URL}/posts`)
		.then((res) => res.json())
		.then((data) => {
			data.forEach((item) => {
				urls.push(`<url><loc>${`${FRONT_URL}/blog/${item.slug}`}</loc></url>`);
			});
		});

	const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
			<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
				${urls.join('')}
			</urlset>`;

	fs.writeFileSync('public/sitemap.xml', sitemap);
})();
