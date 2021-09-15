import { Feed } from 'feed';

export const generateRssFeed = async (data) => {
	const date = new Date();

	const author = {
		name: 'Thomas Claireau',
		email: 'thomas.claireau@gmail.com',
		link: 'https://www.linkedin.com/in/thomas-claireau/',
	};

	const feed = new Feed({
		title: "Thomas Claireau | Blog d'un développeur fullstack",
		description:
			"Je m'appelle Thomas Claireau et je suis développeur web fullstack. Sur ce site, je présente mes projets et des articles destinés à partager mon expérience",
		id: process.env.NEXT_APP_URL + '/blog',
		link: process.env.NEXT_APP_URL + '/blog',
		// image: `${process.env.NEXT_APP_URL}/logo.svg`,
		// favicon: `${process.env.NEXT_APP_URL}/favicon.png`,
		copyright: `Tous droits réservés ${date.getFullYear()}, Thomas Claireau`,
		updated: date,
		generator: 'Feed for Node.js',
		feedLinks: {
			rss2: `${process.env.NEXT_APP_URL}/rss/feed.xml`,
			json: `${process.env.NEXT_APP_URL}/rss/feed.json`,
			atom: `${process.env.NEXT_APP_URL}/rss/atom.xml`,
		},
		author,
	});

	// feed posts
	data.forEach((post) => {
		feed.addItem({
			title: post.title,
			id: `${process.env.NEXT_APP_URL}/post/${post.slug}`,
			link: `${process.env.NEXT_APP_URL}/post/${post.slug}`,
			description: post.content.substring(0, 250) + '...',
			content: post.content,
			author: [author],
			contributor: [author],
			date: new Date(post.updated_at),
		});
	});

	return feed;
};
