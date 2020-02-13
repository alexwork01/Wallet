import React, { memo } from "react";
import PropTypes from "prop-types";

import { ItemContainer, FooterLabel } from "./styled";

const propTypes = {
  label: PropTypes.string.isRequired,
  children: PropTypes.any.isRequired
};

export const FooterItem = memo(props => {
  const { children, label } = props;

  return (
    <ItemContainer activeOpacity={0.75}>
      {children}
      <FooterLabel>{label}</FooterLabel>
    </ItemContainer>
  );
});

FooterItem.propTypes = propTypes;
