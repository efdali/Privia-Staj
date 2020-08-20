import React from 'react';
import Container from '../Container';
import Nav from '../Nav';
import { Link } from '../Link';

import styles from './Header.module.css';

function Header() {
  return (
    <header className={styles.header}>
      <Container>
        <h1 className={styles.brand}>
          <Link href="/">
            <a>Logo</a>
          </Link>
        </h1>
        <Nav />
      </Container>
    </header>
  );
}

export default Header;
