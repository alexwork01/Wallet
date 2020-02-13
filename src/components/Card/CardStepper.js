import React, { memo } from "react";
import PropTypes from "prop-types";

import { CardStep, CardStepContainer } from "./styled";

const propTypes = {
  activeStep: PropTypes.number.isRequired,
  stepsAmount: PropTypes.number.isRequired
};

export const CardStepper = memo(props => {
  const { activeStep, stepsAmount } = props;

  return (
    <CardStepContainer>
      {[...new Array(stepsAmount)].map((item, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <CardStep key={`step${index}`} isActive={index + 1 === activeStep} />
      ))}
    </CardStepContainer>
  );
});

CardStepper.propTypes = propTypes;
