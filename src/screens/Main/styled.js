import styled from "styled-components/native";
import { AnimatedFade } from "../../components/AnimatedFade";

export const Wrapper = styled.SafeAreaView`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

export const Body = styled.View`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

export const Container = styled.View`
  display: flex;
  flex: ${props => props.flex || 0};
  flex-direction: column;
`;

export const DropdownSection = styled(AnimatedFade)`
  margin-top: 20;
  padding-left: 18;
  padding-right: 18;
`;

export const InputSection = styled(AnimatedFade)`
  margin-top: 10;
`;

export const Footer = styled.View`
  height: 56;
`;
