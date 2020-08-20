import React, { useCallback } from 'react';
import { ChevronUp } from '../icons';

import styles from './BacktoTop.module.css';

function BacktoTop() {
  const scrollTop = useCallback(
    () => window.scrollTo({ top: 0 }),
    [],
  );
  return (
    <button onClick={scrollTop} className={styles.button}>
      <ChevronUp />
    </button>
  );
}

export default BacktoTop;
