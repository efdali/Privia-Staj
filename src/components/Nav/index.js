import React from 'react';
import cn from 'classnames';
import { ActiveLink } from '../Link';
import { ChevronDown } from '../icons';

import styles from './Nav.module.css';

function Nav({ footer }) {
  return (
    <nav className={cn(styles.nav, { [styles.footer]: footer })}>
      <ActiveLink href="/" activeClassName={styles.activeLink}>
        <a>Anasayfa</a>
      </ActiveLink>
      <ActiveLink href="#about" activeClassName={styles.activeLink}>
        <a>Hakkımızda</a>
      </ActiveLink>
      <ActiveLink
        href="#products"
        activeClassName={styles.activeLink}
      >
        <a>
          Ürünlerimiz
          <ChevronDown />
        </a>
      </ActiveLink>
      <ActiveLink href="#career" activeClassName={styles.activeLink}>
        <a>Kariyer</a>
      </ActiveLink>
      <ActiveLink href="#blog" activeClassName={styles.activeLink}>
        <a>Blog</a>
      </ActiveLink>
      <ActiveLink href="#contact" activeClassName={styles.activeLink}>
        <a>İletişim</a>
      </ActiveLink>
    </nav>
  );
}

export default Nav;
