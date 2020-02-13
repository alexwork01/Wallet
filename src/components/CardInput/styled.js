import styled from "styled-components/native";

export const InputWrapper = styled.SafeAreaView`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const InputItem = styled.View`
  flex: 1;
  margin-left: 10;
  margin-right: 10;
`;

export const InputText = styled.TextInput`
  border-bottom-color: ${props =>
    props.isActive && props.editable
      ? props.theme.color.blueLight
      : props.theme.color.borderThird};
  border-bottom-width: ${props => (props.editable ? 1 : 0)};
  color: ${props => props.theme.color.iconDefault};
  font-family: ${props => props.theme.font.regular};
  font-size: 16;
  height: 40;
  text-align: center;
`;
