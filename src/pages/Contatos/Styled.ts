import styled from "styled-components/native";

export const Container = styled.ScrollView`
    flex: 1;
    height: 100%;
    padding: 40px;
`;

export const View = styled.View`
    flex: 1;
    margin-bottom: 100px;
`;


export const ContactCard = styled.TouchableOpacity`
    flex: 1;
    padding: 15px;
    border: 1px solid black;
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
  color: #333;
`;

export const Img = styled.Image`
    width: 50px;
    height: 50px;
`;