import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';
import styles, { button } from './Button.module.scss';

export default function Button({
  className, icon, text, url, type, blank,
}) {
  return (
    <Link href={url}>
      <a
        target={blank ? '_blank' : ''}
        className={`${className} ${button} ${styles[type]}`}
      >
        {icon}
        <span>{text}</span>
      </a>
    </Link>
  );
}

Button.propTypes = {
  className: PropTypes.string,
  icon: PropTypes.element.isRequired,
  text: PropTypes.string,
  url: PropTypes.string.isRequired,
  type: PropTypes.string,
  blank: PropTypes.bool,
};

Button.defaultProps = {
  className: '',
  text: '',
  type: '',
  blank: false,
};
