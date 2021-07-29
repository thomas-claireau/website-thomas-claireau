import Head from 'next/head';

import { container } from './Container.module.scss';

export default function Container({ tag = 'div', children, className }) {
	const Tag = tag;

	return <Tag className={`${className} ${container}`}>{children}</Tag>;
}
