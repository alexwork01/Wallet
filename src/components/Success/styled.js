import styled from "styled-components/native";
import { AnimatedHeight } from "../AnimatedHeight";
import { AnimatedFade } from "../AnimatedFade";

export const SuccessWrapper = styled(AnimatedFade)`
  align-items: center;
  display: flex;
  flex: 1;
  flex-direction: column;
  padding-left: 15;
  padding-right: 15;
`;

export const SuccessContainer = styled.View`
  align-items: center;
  flex: 1;
  flex-direction: column;
  justify-content: center;
`;

export const SuccessMessage = styled.Text`
  color: ${props => props.color || props.theme.color.textDefault};
  font-family: ${props => props.theme.font.regular};
  font-size: ${props => props.fontSize || 14};
  text-align: center;
`;

export const SuccessFooter = styled.View`
  align-items: center;
  border-top-color: ${props => props.theme.color.borderThird};
  border-top-width: 1;
  display: flex;
  flex-direction: column;
  padding-top: 10;
`;
