import React from 'react';
import cn from 'classnames';
import Container from '../Container';

import styles from './Section1.module.css';

function Section({
  id,
  full = false,
  lightBg = false,
  className,
  children,
}) {
  return (
    <section
      id={id}
      className={cn(
        styles.section,
        {
          [styles.full]: full,
          [styles.lightBg]: lightBg,
        },
        className,
      )}
    >
      <Container>{children}</Container>
    </section>
  );
}

Section.Body = function Body({ right = false, children }) {
  return (
    <article className={cn(right ? styles.right : styles.left)}>
      {children}
    </article>
  );
};

Section.Name = function Name({ children }) {
  return <span className={styles.name}>{children}</span>;
};

Section.Title = function Title({ big = false, children }) {
  return (
    <h2 className={cn(styles.title, { [styles.bigTitle]: big })}>
      {children}
    </h2>
  );
};

Section.Desc = function Desc({ big = false, children }) {
  return (
    <p className={cn(styles.desc, { [styles.bigDesc]: big })}>
      {children}
    </p>
  );
};

Section.Image = function Image({ src, alt }) {
  return <img className={styles.image} src={src} alt={alt} />;
};
export default Section;
