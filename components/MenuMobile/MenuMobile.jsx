import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import MenuItem from '../MenuItem/MenuItem';
import { icon, mobile } from '../MenuItem/MenuItem.module.scss';
import { contact, menuMobile } from './MenuMobile.module.scss';

export default function MenuMobile() {
  return (
    <nav className={menuMobile}>
      <MenuItem className={`${icon} ${mobile}`}>
        <a title="Linkedin" href="https://www.linkedin.com/in/thomas-claireau/" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={['fab', 'linkedin-in']} />
        </a>
      </MenuItem>
      <MenuItem className={`${contact} ${mobile}`}>
        <a href="mailto:pro.thomas.claireau@gmail.com?subject=Demande de contact&body=Nom et prénom : %0D%0A%0D%0ABudget : %0D%0A%0D%0A Description du projet : %0D%0A">
          <FontAwesomeIcon icon={['far', 'envelope-open']} />
        </a>
      </MenuItem>
      <MenuItem className={`${icon} ${mobile}`}>
        <a title="Github" href="https://github.com/thomas-claireau" target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={['fab', 'github']} />
        </a>
      </MenuItem>
    </nav>
  );
}
