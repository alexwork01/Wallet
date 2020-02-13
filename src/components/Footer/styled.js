import styled from "styled-components/native";

export const FooterWrapper = styled.View`
  align-items: center;
  background: ${props => props.theme.color.white};
  display: flex;
  flex-direction: row;
  height: 56;
  width: 100%;
`;

export const ItemContainer = styled.TouchableOpacity`
  align-items: center;
  display: flex;
  flex: 1;
  flex-direction: column;
`;

export const FooterLabel = styled.Text`
  color: ${props => props.theme.color.textDefault};
  font-size: 12;
`;
