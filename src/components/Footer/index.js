import React from 'react';
import Container from '../Container';
import styles from './Footer.module.css';
import Button from '../Button';
import Nav from '../Nav';
import { Link } from '../Link';
import { Facebook, Twitter } from '../icons';

function Footer() {
  return (
    <footer className={styles.footer}>
      <Container>
        <div className={styles.info}>
          <h3 className={styles.title}>
            Güvenlik araçlarınızı tek bir merkezden yönetmek istemez
            misiniz?
          </h3>
          <Button dotted>PRIVIAHUB'I İNCELE</Button>
        </div>
        <div className={styles.footerNav}>
          <div>
            <Nav footer />
            <span className={styles.copyright}>PRIVIA © 2020</span>
          </div>
          <div className={styles.social}>
            <Link href="/">
              <a className={styles.socialLink}>
                <Facebook />
              </a>
            </Link>
            <Link href="/">
              <a className={styles.socialLink}>
                <Twitter />
              </a>
            </Link>
            <Link href="/">
              <a className={styles.socialLink}>
                <Facebook />
              </a>
            </Link>
            <Link href="/">
              <a className={styles.socialLink}>
                <Twitter />
              </a>
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
