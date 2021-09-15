import axios from 'axios';
import { generateRssFeed } from '../../utils/rss.config';

const Feed = () => {};

export async function getServerSideProps({ res }) {
	const posts = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/posts`, {
		auth: {
			username: process.env.NEXT_PUBLIC_API_USERNAME,
			password: process.env.NEXT_PUBLIC_API_PASSWORD,
		},
	});

	const feed = await generateRssFeed(posts.data);

	res.write(feed.rss2());
	res.end();

	return {
		props: {},
	};
}

export default Feed;
