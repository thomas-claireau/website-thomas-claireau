import Head from 'next/head';

import { container } from './Container.module.scss';

export default function Container({ children, className }) {
	return <div className={`${className} ${container}`}>{children}</div>;
}
