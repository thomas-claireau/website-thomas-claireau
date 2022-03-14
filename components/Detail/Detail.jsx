import React from 'react';
import PropTypes from 'prop-types';
import { detail } from './Detail.module.scss';

export default function Detail({ type, children }) {
  return <div className={`${detail} ${type}`}>{children}</div>;
}

Detail.propTypes = {
  type: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Detail.defaultProps = {
  type: '',
};
