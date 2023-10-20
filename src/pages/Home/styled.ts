import styled from "styled-components/native";

export const Container = styled.View`
  padding: 50px 20px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  height: 100%;
  background-color: ${(props) => props.theme.colors.background};
`;
export const ContainerProj = styled.TouchableOpacity`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const Img = styled.Image`
  width: 100px;
  height: 100px;
`;
export const Text = styled.Text`
  color: ${(props) => props.theme.colors.colorText};
`;

export const Title = styled.Text`
  color: ${(props) => props.theme.colors.colorText};
  font-size: 24px;
  width: 100%;
  font-weight: 700;
  margin: 15px 0;
`;

