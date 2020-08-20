import React from 'react';
import cn from 'classnames';

import styles from './Text.module.css';

function Text({
  is = 'h1',
  font = 'small',
  weight = 'normal',
  children,
  className = 'activ',
  ...props
}) {
  return React.createElement(
    is,
    { className: cn(className, font, weight), ...props },
    children,
  );
}

export default Text;
