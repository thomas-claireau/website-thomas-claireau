import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '../Button/Button';
import Container from '../Container/Container';
import style from './HireMe.module.scss';

export default function HireMe() {
  return (
    <div className={style['hire-me']}>
      <Container>
        <div>
          <h2>Démarrons un projet</h2>
          <p>
            Et si on travaillait ensemble ?
            <br />
            Rencontrons nous !
          </p>
          <Button
            icon={<FontAwesomeIcon icon={['far', 'envelope-open']} />}
            text="Me contacter"
            url="mailto:pro.thomas.claireau@gmail.com?subject=Demande de contact&body=Nom et prénom : %0D%0A%0D%0ABudget : %0D%0A%0D%0A Description du projet : %0D%0A"
            type="cta"
          />
        </div>
      </Container>
    </div>
  );
}
