import React, { memo } from 'react';
import { default as Anchor } from 'next/link';

function Link({ href, children, ...props }) {
  return (
    <Anchor href={href} prefetch={false} {...props}>
      {children}
    </Anchor>
  );
}

export default memo(Link);
