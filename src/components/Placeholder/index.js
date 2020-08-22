import React from 'react';

import styles from './Placeholder.module.css';

function Placeholder() {
  return (
    <div className={styles.placeholder}>
      <div className={styles.header}></div>
      <div className={styles.body}>
        <span></span>
        <span></span>
      </div>
    </div>
  );
}

export default Placeholder;
