import React from 'react';
import Button from '../../Button';
import { Link } from '../../Link';
import Section from '../../Section';

import styles from './Home.module.css';

function Home() {
  return (
    <Section id="#" full>
      <Section.Body>
        <Section.Title big>
          The Science <b>Of Code</b>
        </Section.Title>
        <Section.Desc big>
          Privia'nın geliştirdiği yeni nesil siber güvenlik
          ürünleriyle kurumsal güvenliğinizi artırın.
        </Section.Desc>
        <Button>Keşfet</Button>
      </Section.Body>
      <Section.Image src="/software.png" alt="software" />

      <Link href="#about">
        <a className={styles.carret}></a>
      </Link>
    </Section>
  );
}

export default Home;
