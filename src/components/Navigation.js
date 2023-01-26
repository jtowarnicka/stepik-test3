import React from "react";
import PropTypes from "prop-types";

export default function Navigation({ look, nextStep, prevStep, pics }) {
  return (
    <div className="move">
      {look?.id > 0 ? (
        <button
          className="btn btn-outline-dark"
          onClick={prevStep}
          type="button"
        >
          Wstecz
        </button>
      ) : null}
      {look?.id < pics.length - 1 ? (
        <button
          className="btn btn-outline-dark"
          onClick={nextStep}
          type="button"
        >
          Dalej
        </button>
      ) : null}
    </div>
  );
}

Navigation.propTypes = {
  look: PropTypes.string,
  nextStep: PropTypes.number,
  prevStep: PropTypes.number,
  pics: PropTypes.array,
};
