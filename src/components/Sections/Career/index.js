import React, { useState, useEffect } from 'react';
import ItemsCarousel from 'react-items-carousel';
import Button from '../../Button';
import { Link } from '../../Link';
import Section from '../../Section';

import styles from './Career.module.css';
import { Next } from '../../icons';
import SliderArrows from '../../SliderArrows';
import Placeholder from '../../Placeholder';

function Career() {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const [jobs, setJobs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/jobs')
      .then((res) => res.json())
      .then((res) => setJobs(res.jobs))
      .finally(() => setLoading(false));
  }, []);

  return (
    <Section id="career" lightBg className={styles.container} column>
      <div className={styles.top}>
        <SliderArrows
          activeIndex={activeItemIndex}
          setActive={(index) => setActiveItemIndex(index)}
          length={jobs.length}
        />
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
        placeholderItem={<Placeholder />}
        enablePlaceholder={true}
        numberOfPlaceholderItems={4}
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        activePosition={'left'}
        numberOfCards={4}
        gutter={20}
        classes={{
          wrapper: styles.slider,
        }}
      >
        {loading
          ? []
          : jobs.map((job) => (
              <div className={styles.card} key={job.id}>
                <div className={styles.logo}>
                  <img src={job.icon} />
                </div>
                <h3 className={styles.title}>{job.title}</h3>
                <p className={styles.secondary}>{job.desc}</p>
                <Link href={job.href}>
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
