const fs = require('fs');
const fetch = require('isomorphic-unfetch');
const rss = [];
const FRONT_URL = process.env.FRONT_URL || 'https://thomas-claireau.com';
const API_URL = process.env.API_URL || 'https://api.thomas-claireau.com';

(async () => {
	// fetch blog
	await fetch(`${API_URL}/blog`)
		.then((res) => res.json())
		.then((data) => {
			const header = data.header;

			rss.push(`<title>${header.title}</title>`);
			rss.push(`<author>${header.user.username} ${header.user.name}</author>`);
			rss.push(`<description>${header.meta_description}</description>`);
			rss.push(`<link>${FRONT_URL}/blog</link>`);
			rss.push(`<language>fr</language>`);
		});

	// fetch all projects
	await fetch(`${API_URL}/posts`)
		.then((res) => res.json())
		.then((data) => {
			if (data.length > 0) {
				data.forEach((post) => {
					const header = post.header;
					const technologies = post.technologies;
					const rssPosts = [];

					rssPosts.push(`<title>${header.title}</title>`);
					rssPosts.push(`<author>${header.user.username} ${header.user.name}</author>`);
					rssPosts.push(`<description>${header.meta_description}</description>`);
					rssPosts.push(`<link>${FRONT_URL}/${post.slug}</link>`);
					rssPosts.push(`<language>fr</language>`);

					technologies.forEach((technologie) => {
						const rssTechnologies = [];

						rssTechnologies.push(`<category>${technologie.technologie}</category>`);

						rssPosts.push(rssTechnologies.join(''));
					});

					rss.push(`<item>${rssPosts.join('')}</item>`);
				});
			}
		});

	const feed = `<?xml version="1.0" encoding="UTF-8"?>
		<rss version="2.0">
			<channel>
				${rss.join('')}
			</channel>
		</rss>
	`;

	fs.writeFileSync('public/feed/posts.xml', feed);
})();
