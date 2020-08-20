import React, { useState } from 'react';
import ItemsCarousel from 'react-items-carousel';
import Button from '../Button';
import { Link } from '../Link';
import Section from './index';

import styles from './Section.module.css';
import { Next, Back, JavaLogo } from '../icons';

function Career() {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 40;
  return (
    <Section id="career" lightBg className={styles.container}>
      <div className={styles.top}>
        <div className={styles.chevrons}>
          <button
            className={activeItemIndex > 0 ? styles.active : ''}
          >
            <Back />
          </button>
          <button
            className={activeItemIndex < 10 ? styles.active : ''}
          >
            <Next />
          </button>
        </div>
        <div className={styles.body}>
          <Section.Name>Kariyer</Section.Name>
          <Section.Title>Açık Pozisyonlar</Section.Title>
          <Section.Desc>
            Lorem Ipsum is simply dummy text of the printing and
            typesetting industry.
          </Section.Desc>
        </div>
      </div>
      <ItemsCarousel
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        numberOfCards={4}
        gutter={20}
        leftChevron={<button>{'<'}</button>}
        rightChevron={<button>{'>'}</button>}
        outsideChevron
        chevronWidth={chevronWidth}
        classes={{ wrapper: styles.slider }}
      >
        {[1, 2, 3, 4].map((v) => (
          <div className={styles.card} key={v}>
            <div className={styles.logo}>
              <JavaLogo />
            </div>
            <h3 className={styles.title}>Senior Java Developer</h3>
            <p className={styles.secondary}>
              Lorem Ipsum is simply dummy text of the printing and
              typesetting industry.
            </p>
            <Link href="/">
              <a className={styles.apply}>
                Başvur <Next />
              </a>
            </Link>
          </div>
        ))}
      </ItemsCarousel>
      <Button>Tüm Açık Pozisyonlar</Button>
    </Section>
  );
}

export default Career;
