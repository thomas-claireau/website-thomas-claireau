import PropTypes from 'prop-types';
import { service } from './Service.module.scss';

export default function Service({ children }) {
	return <div className={service}>{children}</div>;
}

Service.propTypes = {
	children: PropTypes.node.isRequired,
};
