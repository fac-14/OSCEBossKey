import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const swipeBallsButton = styled.button`
  padding: 0;
  border: none;
  background-color: transparent;
`;

function InactiveSwipe(props) {
  return (
    <swipeBallsButton data-testid="mark-ball" onClick={props.swipe}>
      <svg height="24" width="24">
        <circle cx="12" cy="12" r="8" fill="#90D9BA" />
        Sorry, your browser does not support inline SVG.
      </svg>
    </swipeBallsButton>
  );
}

function ActiveSwipe(props) {
  return (
    <swipeBallsButton onClick={props.swipe}>
      <svg height="24" width="24">
        <circle cx="12" cy="12" r="11" fill="#009F5C" />
        Sorry, your browser does not support inline SVG.
      </svg>
    </swipeBallsButton>
  );
}

InactiveSwipe.propTypes = {
  swipe: PropTypes.func
};

ActiveSwipe.propTypes = {
  swipe: PropTypes.func
};

export { ActiveSwipe, InactiveSwipe };
