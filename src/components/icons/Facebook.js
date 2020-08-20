import * as React from 'react';

function SvgFacebook(props) {
  return (
    <svg
      aria-hidden="true"
      data-prefix="fab"
      data-icon="facebook-f"
      className="facebook_svg__svg-inline--fa facebook_svg__fa-facebook-f facebook_svg__fa-w-10"
      viewBox="0 0 320 512"
      width="1em"
      height="1em"
      {...props}
    >
      <path
        fill="currentColor"
        d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
      />
    </svg>
  );
}

export default SvgFacebook;
