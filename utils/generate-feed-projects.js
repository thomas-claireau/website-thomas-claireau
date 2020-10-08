const fs = require('fs');
const fetch = require('isomorphic-unfetch');
const rss = [];
const FRONT_URL = process.env.FRONT_URL || 'https://thomas-claireau.com';
const API_URL = process.env.API_URL || 'https://api.thomas-claireau.com';

(async () => {
	// fetch liste projects
	await fetch(`${API_URL}/liste-projets`)
		.then((res) => res.json())
		.then((data) => {
			const header = data.header;

			rss.push(`<title>${header.title}</title>`);
			rss.push(`<author>${header.user.username} ${header.user.name}</author>`);
			rss.push(`<description>${header.meta_description}</description>`);
			rss.push(`<link>${FRONT_URL}/projets</link>`);
			rss.push(`<language>fr</language>`);
		});

	// fetch all projects
	await fetch(`${API_URL}/projets`)
		.then((res) => res.json())
		.then((data) => {
			data.forEach((project) => {
				const header = project.header;
				const categories = project.categories;
				const rssProjects = [];

				rssProjects.push(`<title>${header.title}</title>`);
				rssProjects.push(`<author>${header.user.username} ${header.user.name}</author>`);
				rssProjects.push(`<pubDate>${project.created_at}</pubDate>`);
				rssProjects.push(`<link>${FRONT_URL}/${project.slug}</link>`);
				rssProjects.push(`<guid>${FRONT_URL}/${project.slug}</guid>`);
				rssProjects.push(`<description>${header.meta_description}</description>`);

				categories.forEach((category) => {
					const rssCategories = [];

					rssCategories.push(`<category>${category.category}</category>`);

					rssProjects.push(rssCategories.join(''));
				});

				rss.push(`<item>${rssProjects.join('')}</item>`);
			});
		});

	const feed = `<?xml version="1.0" encoding="UTF-8"?>
		<rss version="2.0">
			<channel>
				${rss.join('')}
			</channel>
		</rss>
	`;

	fs.writeFileSync('public/feed/projects.xml', feed);
})();
