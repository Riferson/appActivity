import styled from "styled-components/native";


export const Container = styled.View`
    background-color: ${(props) => props.theme.colors.background};
    margin-top: 30px;
    height: 100%;
`;


export const ContainerTitle = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 15px;
    background-color: ${(props) => props.theme.colors.backgroundSecondary};
`;


export const Title = styled.Text`
    color: ${(props) => props.theme.colors.colorTextSecondary};
    margin: 0 55px;
    font-size: 20px;
`;

export const SubTitle = styled.Text`
    color: ${(props) => props.theme.colors.colorText};
    font-size: 20px;
    font-weight: 600;
    margin: auto;
`;

export const Text = styled.Text`
  color: ${(props) => props.theme.colors.colorText};
  font-size: 16px;
`;

export const ContainerList = styled.View`
    padding: 20px;
    height: 80%;
`;


export const ContainerOptions = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
`;
export const ContainerProj = styled.TouchableOpacity`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 20px;
`;
export const ScrollViewPessoas = styled.ScrollView`
`;



export const ButtonCadastrar = styled.TouchableOpacity`
    border: 1px solid ${(props) => props.theme.colors.colorText};
    border-radius: 5px;
    padding: 10px;
    margin: 10px auto 0;
    bottom: 25px;
`;

export const Button = styled.TouchableOpacity`
    border-radius: 5px;
    padding: 10px;
    margin: 0;
`;

export const TextButtom = styled.Text`
  color: ${(props) => props.theme.colors.colorText};
  font-size: 22px;
`;

export const ContainerCard = styled.TouchableOpacity`
    border: 1px solid black;
    margin: 10px;
    padding: 10px;
    border-radius: 10px;
`;