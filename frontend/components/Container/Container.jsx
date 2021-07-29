import Head from 'next/head';

import { container } from './Container.module.scss';

export default function Container({ children, className }) {
	return <section className={`${className} ${container}`}>{children}</section>;
}
