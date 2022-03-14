import PropTypes from 'prop-types';
import { container } from './Container.module.scss';

export default function Container({ tag = 'div', children, className }) {
  const Tag = tag;

  return (
    <Tag className={`container ${className} ${container}`}>
      {children}
    </Tag>
  );
}

Container.propTypes = {
  tag: PropTypes.string,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};
