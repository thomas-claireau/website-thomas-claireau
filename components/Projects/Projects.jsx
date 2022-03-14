import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import FantomImage from '../FantomImage/FantomImage';
import style from './Projects.module.scss';

export default function Projects({ fields }) {
  return (
    <ul className={style.projects}>
      {fields.map((field) => (
        <li key={field.title}>
          <a href={field.url} target="_blank" rel="noreferrer">
            <h3>{field.title}</h3>
            <div>
              <FontAwesomeIcon icon={['far', 'eye']} />
              <FantomImage
                className={style['img-container']}
                src={field.image}
                layout="fill"
              />
              {field.date && (
              <span className="year">{field.date}</span>
              )}
              <h4>{field.title}</h4>
              {field.introduction && <p>{field.introduction}</p>}
            </div>
          </a>
        </li>
      ))}
    </ul>
  );
}

Projects.propTypes = {
  fields: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    introduction: PropTypes.string,
    url: PropTypes.string,
    image: PropTypes.string,
    date: PropTypes.string,
  })).isRequired,
};
