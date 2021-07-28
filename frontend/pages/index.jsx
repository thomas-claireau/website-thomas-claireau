import Head from 'next/head';
import { index } from './index.module.scss';

import Header from '../components/Header/Header';

export default function Home() {
	return (
		<>
			<Head>
				<title>Thomas Claireau - Développeur PHP Symfony</title>
			</Head>
			<div className={index}>
				<Header />
			</div>
		</>
	);
}
