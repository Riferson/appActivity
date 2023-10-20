import styled from "styled-components/native";

export const Container = styled.View`
  margin: 0;
  padding: 40px 20px;
  height: 100%;
  background-color: ${(props) => props.theme.colors.background};
`;

export const TouchableOpacity = styled.TouchableOpacity`
  padding: 10px;
  background-color: blue;
  color: green;
  margin: 0;
  width: 80%;
  margin-top: 20px;
`;
export const TouchableOpacityBack = styled.TouchableOpacity``;
export const Title = styled.Text`
  font-size: 22px;
  text-align: center;
  color: ${(props) => props.theme.colors.colorText};
`;

export const ContainerOptions = styled.View``;

export const Options = styled.View`
  display: flex;
  flex-direction: row;
  margin: 5px 0;
  align-items: center;
`;

export const Label = styled.Text`
  font-size: 20px;
  width: 30%;
  color: ${(props) => props.theme.colors.colorText};
`;

export const InputText = styled.TextInput`
  border: 1px solid blue;
  width: 60%;
  font-size: 20px;
  margin-left: 20px;
  padding: 0 10px;
  color: ${(props) => props.theme.colors.colorText};
`;

export const ContainerHead = styled.View`
  flex-direction: row;
  align-items: center;
`;
