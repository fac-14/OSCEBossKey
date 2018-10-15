import React from "react";
import PropTypes from "prop-types";

function InactiveSwipe(props) {
  return (
    <button data-testid="mark-ball" onClick={props.swipe}>
      <svg height="24" width="24">
        <circle cx="12" cy="12" r="8" fill="#90D9BA" />
        Sorry, your browser does not support inline SVG.
      </svg>
    </button>
  );
}

function ActiveSwipe(props) {
  return (
    <button onClick={props.swipe}>
      <svg height="24" width="24">
        <circle cx="12" cy="12" r="11" fill="#009F5C" />
        Sorry, your browser does not support inline SVG.
      </svg>
    </button>
  );
}

InactiveSwipe.propTypes = {
  swipe: PropTypes.func
};

ActiveSwipe.propTypes = {
  swipe: PropTypes.func
};

export { ActiveSwipe, InactiveSwipe };
