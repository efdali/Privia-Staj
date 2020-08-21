import React from 'react';
import Button from '../Button';
import { Next, Back } from '../icons';

import styles from './SliderArrows.module.css';

function SliderArrows({ activeIndex = 0, setActive, length }) {
  return (
    <div className={styles.chevrons}>
      <Button
        onClick={() => setActive(activeIndex - 1)}
        disabled={activeIndex === 0}
        reset
      >
        <Back />
      </Button>
      <Button
        onClick={() => setActive(activeIndex + 1)}
        disabled={activeIndex === length - 1}
        reset
      >
        <Next />
      </Button>
    </div>
  );
}

export default SliderArrows;
