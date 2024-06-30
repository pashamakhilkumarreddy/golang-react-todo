import React, {memo} from 'react';

/**
 * The `Logo` component renders the SVG logo used in the header.
 * @example
 * return (
 *   <Logo />
 * );
 * @returns {React.FC} The rendered Logo component.
 */
const Logo: React.FC = memo(() => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 64 64"
    width="200"
    height="200"
    fill="#000000"
  >
    <circle cx="32" cy="32" r="30" fill="#fddbb0" />
    <path
      d="M22 16C20 22 24 28 24 28s-2-10 8-12 8 12 8 12-4-6-6-12-12-2-12-2z"
      fill="#3c1e1e"
    />
    <circle cx="24" cy="28" r="4" fill="#ffffff" />
    <circle cx="24" cy="28" r="2" fill="#000000" />
    <circle cx="40" cy="28" r="4" fill="#ffffff" />
    <circle cx="40" cy="28" r="2" fill="#000000" />
    <path
      d="M24 38c1 1 4 1 5 0"
      stroke="#000000"
      strokeWidth="1"
      fill="none"
    />
    <path
      d="M22 46h20v20H22z"
      fill="#6c5b5b"
    />
    <path
      d="M18 18h4v4h-4zM42 18h4v4h-4z"
      fill="#3c1e1e"
    />
  </svg>
));

Logo.displayName = 'Logo';

export default Logo;
