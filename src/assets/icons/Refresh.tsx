import * as React from 'react';

const RefreshIcon = (props: React.SVGProps<SVGSVGElement>) => {
  return (
    <svg
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      viewBox="0 0 24 24"
      {...props}
    >
      <path stroke="none" d="M0 0h24v24H0z" />
      <path d="M4.05 11a8 8 0 11.5 4m-.5 5v-5h5" />
    </svg>
  );
};

export { RefreshIcon };
