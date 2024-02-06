import * as React from "react";
const ArrowDropDownIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="1em"
    height="1em"
    fill="none"
    viewBox="0 0 24 24"
    style={{
      display: "block",
      overflow: "hidden",
      right: "7px",
      top: "calc(50% - 0.5em)",
      fontSize: "1.5rem",
      color: "rgba(0,0,0,0.54)",
      pointerEvents: "none",
      fill: "currentcolor",
      position: "absolute",
      transition: "fill 200ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",
      userSelect: "none",
      transform: props.arrowTransform,
    }}
    {...props}
  >
    <path d="M7 10l5 5 5-5z"></path>
  </svg>
);
export default ArrowDropDownIcon;
