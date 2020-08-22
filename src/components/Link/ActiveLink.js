import React, { useMemo, memo } from 'react';
import { useRouter } from 'next/router';

import Link from './Link.js';

function ActiveLink({ href, activeClassName = '', children }) {
  const { asPath, pathname } = useRouter();
  console.log(asPath);
  const className = useMemo(() => {
    let path = '';

    if (!asPath.includes('#')) {
      path = '#';
    } else {
      path = asPath.slice(asPath.indexOf('#'));
    }
    return path === href ? activeClassName : '';
  }, [asPath, pathname]);

  return (
    <Link href={href}>
      {React.cloneElement(children, {
        className,
      })}
    </Link>
  );
}

export default memo(ActiveLink);
