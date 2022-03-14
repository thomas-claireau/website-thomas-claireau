import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '../Button/Button';
import MenuItem from '../MenuItem/MenuItem';
import style from '../MenuItem/MenuItem.module.scss';
import { menu } from './Menu.module.scss';

export default function Menu() {
  return (
    <nav className={menu}>
      <MenuItem className={style.icon}>
        <a title="Linkedin" href="https://www.linkedin.com/in/thomas-claireau/" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={['fab', 'linkedin-in']} />
        </a>
      </MenuItem>
      <MenuItem className={style.icon}>
        <a title="Github" href="https://github.com/thomas-claireau" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={['fab', 'github']} />
        </a>
      </MenuItem>
      <MenuItem className={style.contact}>
        <Button
          icon={<FontAwesomeIcon icon={['far', 'envelope-open']} />}
          text="Contactez-moi"
          url="mailto:pro.thomas.claireau@gmail.com?subject=Demande de contact&body=Nom et prénom : %0D%0A%0D%0ABudget : %0D%0A%0D%0A Description du projet : %0D%0A"
          type="cta"
        />
      </MenuItem>
    </nav>
  );
}
