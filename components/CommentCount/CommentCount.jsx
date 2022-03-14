import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { ReactSVG } from 'react-svg';
import style from './CommentCount.module.scss';

export default function CommentCount({ direction }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(0); // api here
  }, []);

  return (
    <div className={`${style['comment-count']} ${style[direction]}`}>
      {count !== 0 && <span>{count < 100 ? count : '99+'}</span>}
      <ReactSVG src="/assets/img/comment.svg" alt="comment svg" />
    </div>
  );
}

CommentCount.propTypes = {
  direction: PropTypes.string.isRequired,
};
