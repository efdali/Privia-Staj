import React from 'react';

import styles from './Checkbox.module.css';

function Checkbox({ children, ...props }) {
  return (
    <label className={styles.label}>
      <input type="checkbox" className={styles.checkbox} {...props} />
      <span className={styles.checkmark}></span>
      {children}
    </label>
  );
}

export default Checkbox;
