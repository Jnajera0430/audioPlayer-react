import React from 'react';

const IconAudio = ({
  color = '#231f20',
  strokeWidth = 0,
  width = 24,
  height = 24,
}) => (
  <svg
    id="Layer_1"
    data-name="Layer 1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 200 200"
    width={width}
    height={height}
  >
    <defs>
      <style>
        {`.cls-1{fill:${color};stroke-width:${strokeWidth}px;}`}
      </style>
    </defs>
    <title>Wondicon - UI (Free)</title>
    <path
      className="cls-1"
      d="M100,175.69a5,5,0,0,1-3.37-1.31L48.06,130H29.31a5,5,0,0,1-5-5V75a5,5,0,0,1,5-5H48.06L96.63,25.62A5,5,0,0,1,105,29.31V170.69a5,5,0,0,1-5,5ZM34.31,120H50a5,5,0,0,1,3.37,1.31l41.63,38V40.65l-41.63,38A5,5,0,0,1,50,80H34.31Z"
    />
    <path
      className="cls-1"
      d="M119.4,122.53a5,5,0,0,1-3.54-8.53,19.82,19.82,0,0,0,0-28,5,5,0,0,1,7.07-7.07,29.83,29.83,0,0,1,0,42.14A5,5,0,0,1,119.4,122.53Z"
    />
    <path
      className="cls-1"
      d="M137.08,140.21a5,5,0,0,1-3.54-8.54,44.78,44.78,0,0,0,0-63.34,5,5,0,1,1,7.07-7.07,54.78,54.78,0,0,1,0,77.48A5,5,0,0,1,137.08,140.21Z"
    />
    <path
      className="cls-1"
      d="M152,155.13a5,5,0,0,1-3.54-8.53,65.91,65.91,0,0,0,0-93.2,5,5,0,1,1,7.07-7.07,75.9,75.9,0,0,1,0,107.34A5,5,0,0,1,152,155.13Z"
    />
  </svg>
);

export default IconAudio;
