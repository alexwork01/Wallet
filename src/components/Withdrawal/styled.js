import styled from "styled-components/native";
import { AnimatedFade } from "../AnimatedFade";

export const WithdrawalWrapper = styled(AnimatedFade)`
  align-items: center;
  display: flex;
  flex-direction: column;
`;

export const WithdrawalContainer = styled.View`
  align-items: center;
  display: flex;
  flex-direction: row;
  margin-top: 10;
  width: 95%;
`;

export const WithdrawalLabel = styled.Text`
  color: ${props => props.theme.color.textDefault};
  font-family: ${props => props.theme.font.regular};
  font-size: 16;
  flex: 1;
`;

export const WithdrawalType = styled.Text`
  color: ${props => props.theme.color.textDefault};
  font-family: ${props => props.theme.font.regular};
  font-size: 16;
  margin-top: 20;
`;

export const WithdrawalCurrency = styled.Text`
  color: ${props => props.theme.color.borderPrimary};
  font-family: ${props => props.theme.font.regular};
  font-size: 30;
  padding-left: 10;
`;

export const WithdrawalAmount = styled.View`
  align-items: center;
  border-bottom-color: ${props => props.theme.color.iconDefault};
  border-bottom-width: 1;
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 10;
  width: 250;
`;

export const WithdrawalInput = styled.TextInput`
  color: ${props => props.theme.color.borderPrimary};
  font-family: ${props => props.theme.font.regular};
  font-size: 30;
  text-align: center;
`;

export const WithdrawalSection = styled.View`
  margin-top: 10;
  width: 80%;
`;
