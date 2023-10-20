import styled from "styled-components/native";

export const Container = styled.ScrollView`
    flex: 1;
    height: 100%;
    padding: 40px;
    background-color: ${(props) => props.theme.colors.background}
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
  padding: 5px;
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

export const iconStyles = {
  margin: 25,
  width: 150,
  height: 150
};

export const ImgContainer = styled.View`
    width: 100vw;
    padding: 0;
    border: 1px solid #000;
    border-width: 0 0 1px 0;
    margin: auto;
`;