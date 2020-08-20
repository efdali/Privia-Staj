import React, { memo } from 'react';
import { default as Anchor } from 'next/link';

function Link({ href, children }) {
  return (
    <Anchor href={href} prefetch={false}>
      {children}
    </Anchor>
  );
}

export default memo(Link);
