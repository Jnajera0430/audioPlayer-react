import React from 'react';
import { CustomCSSProperties } from '../types';

const IconPlay = ({
  color = '#000000',
  strokeWidth = 1,
  width = 24,
  height = 24,
}) => (
  <svg
    id="blue_copy"
    style={{ enableBackground: 'new 0 0 100 100' } as CustomCSSProperties}
    version="1.1"
    viewBox="0 0 100 100"
    xmlSpace="preserve"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={width}
    height={height}
  >
    <g id="Layer_4_copy">
      <path
        d="M31.356,25.677l38.625,22.3c1.557,0.899,1.557,3.147,0,4.046l-38.625,22.3c-1.557,0.899-3.504-0.225-3.504-2.023V27.7C27.852,25.902,29.798,24.778,31.356,25.677z"
        style={{ fill: 'none', stroke: color, strokeMiterlimit: 10, strokeWidth }}
      />
      <path
        d="M69.981,47.977l-38.625-22.3c-0.233-0.134-0.474-0.21-0.716-0.259l37.341,21.559c1.557,0.899,1.557,3.147,0,4.046l-38.625,22.3c-0.349,0.201-0.716,0.288-1.078,0.301c0.656,0.938,1.961,1.343,3.078,0.699l38.625-22.3C71.538,51.124,71.538,48.876,69.981,47.977z"
        style={{ fill: 'none', stroke: color, strokeMiterlimit: 10, strokeWidth }}
      />
    </g>
  </svg>
);

export default IconPlay;