import React, { memo, useContext } from "react";
import PropTypes from "prop-types";
import { ThemeContext } from "styled-components";

import { CardContainer, CardText } from "./styled";

const propTypes = {
  lastDigits: PropTypes.string.isRequired
};

export const CardMusk = memo(props => {
  const { lastDigits } = props;
  const theme = useContext(ThemeContext);

  const muskNumber = [...new Array(3).fill("XXXX"), lastDigits];

  return (
    <CardContainer>
      {muskNumber.map((item, index) => (
        // eslint-disable-next-line react/no-array-index-key
        <CardText key={item + index} fontSize={20}>
          {item}
        </CardText>
      ))}
    </CardContainer>
  );
});

CardMusk.propTypes = propTypes;
