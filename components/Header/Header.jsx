import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Container from '../Container/Container';
import Menu from '../Menu/Menu';
import MenuMobile from '../MenuMobile/MenuMobile';
import style from './Header.module.scss';

export default function Header() {
  const [scrolled, setScrolled] = useState(0);

  function handleScroll() {
    setScrolled(window.scrollY > 0);
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header
      className={`${style.header} ${scrolled ? style.scrolled : ''}`}
    >
      <Container>
        <Link href="/">
          <a className={style.left}>
            Thomas
            {' '}
            <span>/</span>
            {' '}
            Claireau
          </a>
        </Link>
        <Menu />
        <MenuMobile />
      </Container>
    </header>
  );
}
