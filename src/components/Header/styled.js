import styled from "styled-components/native";

export const HeaderWrapper = styled.View`
  align-items: center;
  background: ${props => props.theme.color.blue};
  color: ${props => props.theme.color.white};
  display: flex;
  flex-direction: row;
  height: ${props => props.height};
  padding-right: 10;
  padding-top: ${props => props.statusBarHeight};
`;

export const HeaderText = styled.Text`
  color: ${props => props.theme.color.white};
  font-family: ${props => props.theme.font.regular};
  font-size: 16;
  padding-left: 5;
  padding-right: 5;
`;

export const HeaderLeftComponent = styled.TouchableOpacity`
  align-items: center;
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: flex-start;
  padding-left: 10;
`;

export const HeaderCenterComponent = styled.TouchableOpacity`
  align-items: center;
  display: flex;
  flex: 3;
  flex-direction: row;
  justify-content: center;
`;

export const HeaderRightComponent = styled.TouchableOpacity`
  align-items: center;
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: flex-end;
`;
