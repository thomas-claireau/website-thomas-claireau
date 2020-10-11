import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';

export default function GlobalSeo({ data, additionnalOpenGraph }) {
	const router = useRouter();
	const url = process.env.FRONT_URL + router.asPath;
	const NO_INDEX_NO_FOLLOW = process.env.NO_INDEX_NO_FOLLOW === 'true';

	const SEO = {
		title: data.header.meta_title,
		description: data.header.meta_description,
		openGraph: {
			title: data.header.meta_title,
			description: data.header.meta_description,
			images: [
				data.header.main_image
					? {
							url: data.header.main_image.url,
							width: 1920,
							height: 1080,
							alt: data.header.main_image.alt,
							caption: data.header.main_image.caption,
					  }
					: {},
			],
			url,
			...additionnalOpenGraph,
		},
		noindex: NO_INDEX_NO_FOLLOW,
		nofollow: NO_INDEX_NO_FOLLOW,
	};

	return (
		<>
			<NextSeo {...SEO} />
		</>
	);
}
