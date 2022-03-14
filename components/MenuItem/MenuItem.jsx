/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';
import { menuItem } from './MenuItem.module.scss';

export default function Menu({ className, children, onClick }) {
  return (
    <div className={`${className} ${menuItem}`} onClick={onClick} role="button" tabIndex="0">
      {children}
    </div>
  );
}

Menu.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
};

Menu.defaultProps = {
  className: '',
  onClick: () => {},
};
