import React from "react";

function InactiveSwipe(props) {
  return (
    <button onClick={props.swipe}>
      <svg height="50" width="50">
        <circle
          cx="25"
          cy="25"
          r="10"
          stroke="black"
          strokeWidth="2"
          fill="none"
        />
        Sorry, your browser does not support inline SVG.
      </svg>
    </button>
  );
}

function ActiveSwipe(props) {
  return (
    <button onClick={props.swipe}>
      <svg height="50" width="50">
        <circle
          cx="25"
          cy="25"
          r="10"
          stroke="black"
          strokeWidth="2"
          fill="black"
        />
        Sorry, your browser does not support inline SVG.
      </svg>
    </button>
  );
}

export { ActiveSwipe, InactiveSwipe };
