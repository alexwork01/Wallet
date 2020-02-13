import styled from "styled-components/native";

export const ButtonWrapper = styled.TouchableOpacity`
  align-items: center;
  background: ${props => props.theme.color.white};
  border-bottom-left-radius: 24;
  border-bottom-right-radius: 24;
  border-color: ${props =>
    props.isDisabled
      ? props.theme.color.iconDefault
      : props.theme.color.borderPrimary};
  border-style: solid;
  border-top-left-radius: 24;
  border-top-right-radius: 24;
  border-width: 1;
  color: ${props => props.theme.color.textDefault};
  display: flex;
  flex-direction: row;
  height: 48;
  margin-top: 20;
`;

export const ButtonText = styled.Text`
  color: ${props => props.theme.color.textDefault};
  flex: 4;
  font-family: ${props => props.theme.font.regular};
  font-size: 20;
  text-align: center;
  text-transform: uppercase;
`;

export const ButtonLeftComponent = styled.TouchableOpacity`
  align-items: center;
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: flex-start;
  justify-content: flex-end;
`;

export const ButtonRightComponent = styled.TouchableOpacity`
  align-items: center;
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: flex-start;
`;
