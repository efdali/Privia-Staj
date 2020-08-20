import * as React from 'react';

function SvgBack(props) {
  return (
    <svg
      aria-hidden="true"
      data-prefix="far"
      data-icon="long-arrow-alt-left"
      viewBox="0 0 448 512"
      className="back_svg__svg-inline--fa back_svg__fa-long-arrow-alt-left back_svg__fa-w-14 back_svg__fa-5x"
      width="1em"
      height="1em"
      {...props}
    >
      <path
        fill="currentColor"
        d="M107.515 150.971L8.485 250c-4.686 4.686-4.686 12.284 0 16.971L107.515 366c7.56 7.56 20.485 2.206 20.485-8.485v-71.03h308c6.627 0 12-5.373 12-12v-32c0-6.627-5.373-12-12-12H128v-71.03c0-10.69-12.926-16.044-20.485-8.484z"
      />
    </svg>
  );
}

export default SvgBack;
