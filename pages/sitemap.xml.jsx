import axios from 'axios';
import fs from 'fs';

const Sitemap = () => {};

export async function getServerSideProps({ res }) {
	const staticPages = fs
		.readdirSync('pages')
		.filter((staticPage) => {
			return (
				staticPage.endsWith('.jsx') &&
				!['_app.jsx', 'sitemap.xml.jsx'].includes(staticPage)
			);
		})
		.map((staticPagePath) => {
			if (staticPagePath == 'index.jsx') staticPagePath = ''; // home page

			return `${process.env.VERCEL_URL}/${staticPagePath.replace(
				'.jsx',
				''
			)}`;
		});

	const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${staticPages
			.map((url) => {
				return `
            <url>
              <loc>${url}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>monthly</changefreq>
              <priority>1.0</priority>
            </url>
          `;
			})
			.join('')}
    </urlset>
  `;

	res.setHeader('Content-Type', 'text/xml');
	res.write(sitemap);
	res.end();

	return {
		props: {},
	};
}

export default Sitemap;
