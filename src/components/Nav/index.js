import React from 'react';
import cn from 'classnames';
import { ActiveLink, Link } from '../Link';
import { ChevronDown } from '../icons';

import NAV from '../../const/navigation';

import styles from './Nav.module.css';

function Nav({ footer }) {
  return (
    <ul className={cn(styles.nav, { [styles.footer]: footer })}>
      {NAV.map((v, i) => (
        <li key={i}>
          <ActiveLink
            href={v.href}
            activeClassName={styles.activeLink}
          >
            <a>
              {v.title}
              {v.submenu && <ChevronDown />}
            </a>
          </ActiveLink>
          {v.submenu && (
            <ul className={styles.dropdown}>
              {v.submenu.map((s, i) => (
                <li key={i}>
                  <Link href={s.href}>
                    <a>{s.title}</a>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>
      ))}
    </ul>
  );
}

export default Nav;
