import React from "react";
import { CustomCSSProperties } from "../types";

const IconPause = ({
  color = '#000000',
  strokeWidth = 1,
  width = 24,
  height = 24,
}) => (
  <svg
    id="blue_copy"
    version="1.1"
    viewBox="0 0 100 100"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={width}
    height={height}
    style={{ enableBackground: 'new 0 0 100 100' } as CustomCSSProperties}
  >
    <g id="Layer_7_copy">
      <path
        d="M39.806,72.858h-8.915c-2.176,0-3.94-1.764-3.94-3.94V31.119c0-2.176,1.764-3.94,3.94-3.94h8.915   c2.176,0,3.94,1.764,3.94,3.94v37.799C43.746,71.094,41.982,72.858,39.806,72.858z"
        style={{ fill: 'none', stroke: color, strokeWidth, strokeMiterlimit: 10 }}
      />
      <path
        d="M68.109,72.821h-8.915c-2.176,0-3.94-1.764-3.94-3.94V31.082c0-2.176,1.764-3.94,3.94-3.94h8.915   c2.176,0,3.94,1.764,3.94,3.94v37.799C72.049,71.057,70.285,72.821,68.109,72.821z"
        style={{ fill: 'none', stroke: color, strokeWidth, strokeMiterlimit: 10 }}
      />
      <path
        d="M40.489,27.248c0.769,0.719,1.257,1.735,1.257,2.871v37.799c0,2.176-1.764,3.94-3.94,3.94h-8.915   c-0.234,0-0.46-0.03-0.683-0.069c0.704,0.658,1.643,1.069,2.683,1.069h8.915c2.176,0,3.94-1.764,3.94-3.94V31.119   C43.746,29.177,42.338,27.573,40.489,27.248z"
        style={{ fill: 'none', stroke: color, strokeWidth, strokeMiterlimit: 10 }}
      />
      <path
        d="M68.792,27.211c0.769,0.719,1.257,1.735,1.257,2.871v37.799c0,2.176-1.764,3.94-3.94,3.94h-8.915   c-0.234,0-0.46-0.03-0.683-0.069c0.704,0.658,1.643,1.069,2.683,1.069h8.915c2.176,0,3.94-1.764,3.94-3.94V31.082   C72.049,29.14,70.641,27.535,68.792,27.211z"
        style={{ fill: 'none', stroke: color, strokeWidth, strokeMiterlimit: 10 }}
      />
      <path
        d="M39.806,72.858h-8.915c-2.176,0-3.94-1.764-3.94-3.94V31.119   c0-2.176,1.764-3.94,3.94-3.94h8.915c2.176,0,3.94,1.764,3.94,3.94v37.799C43.746,71.094,41.982,72.858,39.806,72.858z"
        style={{ fill: 'none', stroke: color, strokeWidth, strokeMiterlimit: 10 }}
      />
      <path
        d="M68.109,72.821h-8.915c-2.176,0-3.94-1.764-3.94-3.94V31.082   c0-2.176,1.764-3.94,3.94-3.94h8.915c2.176,0,3.94,1.764,3.94,3.94v37.799C72.049,71.057,70.285,72.821,68.109,72.821z"
        style={{ fill: 'none', stroke: color, strokeWidth, strokeMiterlimit: 10 }}
      />
    </g>
  </svg>
);

export default IconPause;
