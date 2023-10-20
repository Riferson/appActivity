import styled from "styled-components/native";

export const Container = styled.ScrollView`
  flex: 1;
  height: 100%;
  padding: 40px;
  background-color: ${(props) => props.theme.colors.background};
`;

export const View = styled.View`
  flex: 1;
  margin-bottom: 100px;
`;

export const ContactCard = styled.TouchableOpacity`
  flex: 1;
  padding: 15px;
  border: 1px solid ${(props) => props.theme.colors.colorText};
  margin: 10px 0;
`;

export const Button = styled.TouchableOpacity`
  background-color: blue;
  padding: 10px 20px;
  border-radius: 5px;
  width: 100%;
`;

export const ButtonText = styled.Text`
  color: #fff;
  font-size: 16px;
  text-align: center;
`;

export const Text = styled.Text`
  font-size: 18px;
  margin-top: 10px;
  color: ${(props) => props.theme.colors.colorText};
`;

export const Img = styled.Image`
  width: 50px;
  height: 50px;
`;

export const ContainerHead = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;
export const Title = styled.Text`
  font-size: 32px;
  text-align: center;
  flex: 1;
  margin-right: 35px;
  color: ${(props) => props.theme.colors.colorText};
`;
