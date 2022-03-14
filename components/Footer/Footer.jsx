import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Container from '../Container/Container';
import FantomImage from '../FantomImage/FantomImage';
import HireMe from '../HireMe/HireMe';
import style from './Footer.module.scss';

export default function Footer() {
  const now = new Date();

  return (
    <footer className={style.footer}>
      <HireMe />
      <Container className={style.container}>
        <div className={style.top}>
          <div className={style.left}>
            <FantomImage
              className={style.memoji}
              src="/assets/img/memoji.png"
              alt="Thomas Claireau"
              width={54}
              height={70}
            />
            <h2>Restons en contact !</h2>
          </div>
          <ul className={style.right}>
            <li>
              <a
                href="https://www.linkedin.com/in/thomas-claireau/"
                target="_blank"
                title="Linkedin"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={['fab', 'linkedin-in']} />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/thomas-claireau"
                target="_blank"
                title="Github"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={['fab', 'github']} />
              </a>
            </li>
            <li>
              <a
                href="mailto:pro.thomas.claireau@gmail.com?subject=Demande de contact&body=Nom et prénom : %0D%0A%0D%0ABudget : %0D%0A%0D%0A Description du projet : %0D%0A"
                target="_blank"
                title="Me contacter"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={['far', 'envelope-open']} />
              </a>
            </li>
          </ul>
        </div>
        <p>
          Copyright ©
          {' '}
          {now.getFullYear()}
          {' '}
          - Thomas Claireau
        </p>
      </Container>
    </footer>
  );
}
