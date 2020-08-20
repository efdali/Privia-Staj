import React from 'react';
import cn from 'classnames';

import styles from './Button.module.css';

function Button({ dotted = false, children, ...props }) {
  return (
    <button
      className={cn(styles.button, { [styles.dotted]: dotted })}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
