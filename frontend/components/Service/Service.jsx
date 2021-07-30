import { service } from './Service.module.scss';

export default function Service({ children }) {
	return <div className={service}>{children}</div>;
}
