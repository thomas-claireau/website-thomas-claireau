import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Head from 'next/head';
import Button from '../components/Button/Button';
import Container from '../components/Container/Container';
import Layout from '../components/Layout/Layout';
import Posts from '../components/Posts/Posts';

import { blog, searchBar, cta } from './blog.module.scss';

export default function Blog() {
	return (
		<Layout>
			<Head>
				<title>Blog - Thomas Claireau, développeur web</title>
			</Head>
			<Container className={blog}>
				<div className={searchBar}>
					<input type="text" />
					<Button
						className={cta}
						icon={<FontAwesomeIcon icon={faSearch} />}
						text=""
						url="#"
						type="cta"
					/>
				</div>
				<Posts
					layout="full"
					items={[[], [], [], [], [], [], [], [], [], [], [], [], []]}
				/>
			</Container>
		</Layout>
	);
}
