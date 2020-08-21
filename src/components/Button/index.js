import React from 'react';
import cn from 'classnames';

import styles from './Button.module.css';

function Button({
  dotted = false,
  reset = false,
  className,
  children,
  ...props
}) {
  return (
    <button
      className={cn(
        reset ? styles.reset : styles.button,
        {
          [styles.dotted]: dotted,
        },
        className,
      )}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
