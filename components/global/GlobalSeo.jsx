import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';

export default function GlobalSeo({ data, ...props }) {
	const router = useRouter();
	const url = process.env.FRONT_URL + router.asPath;

	const SEO = {
		title: data.header.meta_title,
		description: data.header.meta_description,
		openGraph: {
			title: data.header.meta_title,
			description: data.header.meta_description,
			images: [
				{
					url: data.header.main_image.url,
					width: 1920,
					height: 1080,
					alt: data.header.main_image.caption,
				},
			],
			url,
		},
	};

	console.log(SEO);

	return <NextSeo {...SEO} />;
}
