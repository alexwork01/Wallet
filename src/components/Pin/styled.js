import styled from "styled-components/native";
import { AnimatedFade } from "../AnimatedFade";

export const PinWrapper = styled(AnimatedFade)`
  align-items: center;
  display: flex;
  flex-direction: column;
  padding-top: 30;
`;

export const PinSection = styled.View`
  margin-top: 20;
  width: 100%;
  padding-left: 15
  padding-right: 15
`;

export const PinMessage = styled.Text`
  color: ${props => props.theme.color.textDefault};
  font-family: ${props => props.theme.font.regular};
  font-size: 14;
  text-align: center;
  width: 95%;
`;

export const PinLabel = styled.Text`
  align-self: flex-start;
  color: ${props => props.theme.color.textDefault};
  font-family: ${props => props.theme.font.regular};
  font-size: 16;
  text-transform: uppercase;
`;
