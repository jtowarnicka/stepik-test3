import React from "react";
import PropTypes from "prop-types";

export default function LookFrame({ look, currentStep }) {
  return (
    <>
      <h3>
        look
        {currentStep}
      </h3>
      <div>
        <img src={look?.url} alt="look" />
      </div>
    </>
  );
}

LookFrame.propTypes = {
  look: PropTypes.string,
  currentStep: PropTypes.number,
};
