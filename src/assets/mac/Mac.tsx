import React from 'react';
import { MAC_SVG } from './constants';

const MacIcon = () => {
  return (
    <div
      style={{
        color: '#fff',
      }}
      dangerouslySetInnerHTML={{ __html: MAC_SVG }}
    />
  );
};

export default React.memo(MacIcon);
