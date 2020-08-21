import React from 'react';
import cn from 'classnames';
import styles from './Input.module.css';

function Input({ is = 'input', inline = false, ...props }) {
  return React.createElement(is, {
    className: cn(styles.input, { [styles.inline]: inline }),
    ...props,
  });
  // <input
  //   type="text"
  //   {...props}
  //   className={cn(styles.input, { [styles.inline]: inline })}
  // />
}

export default Input;
