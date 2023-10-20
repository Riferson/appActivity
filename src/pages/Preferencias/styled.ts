import styled from "styled-components/native";

export const Container = styled.View`
  margin: 0;
  padding: 40px 20px;
  height: 100%;
`;

export const TouchableOpacity = styled.TouchableOpacity`
  padding: 10px;
  background-color: blue;
  color: green;
  margin: 0;
  width: 80%;
  margin-top: 20px;
`;

export const Title = styled.Text`
  font-size: 32px;
  text-align: center;
  margin-bottom: 30px;
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
`;

export const InputText = styled.TextInput`
  border: 1px solid blue;
  width: 60%;
  font-size: 20px;
  margin-left: 20px;
  padding: 0 10px;
`;
