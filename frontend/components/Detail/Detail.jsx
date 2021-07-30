import { detail } from './Detail.module.scss';

export default function Detail({ type, children }) {
	return <div className={`${detail} ${type}`}>{children}</div>;
}
