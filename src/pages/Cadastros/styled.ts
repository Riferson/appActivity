import styled from "styled-components/native";


export const Container = styled.View`
    background-color: ${(props) => props.theme.colors.background};
    margin-top: 30px;
`;


export const ContainerTitle = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
`;


export const Title = styled.Text`
    color: ${(props) => props.theme.colors.colorText};
    margin: 0 0 0 20%;
    font-size: 20px;
`;
export const Text = styled.Text`
  color: ${(props) => props.theme.colors.colorText};
`;

export const ContainerList = styled.View`
    margin-top: 20px;
    height: 80%;
`;


export const ContainerOptions = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin: 20px;
`;
export const ContainerProj = styled.TouchableOpacity`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-left: 20px;
`;
export const ScrollViewPessoas = styled.ScrollView`
    border: 1px solid ${(props) => props.theme.colors.colorText};
    margin-bottom:10px;
`;



export const ButtonCadastrar = styled.TouchableOpacity`
    border: 1px solid ${(props) => props.theme.colors.colorText};
    border-radius: 5px;
    padding: 10px;
    margin: auto;
`;

export const Button = styled.TouchableOpacity`
    border: 1px solid ${(props) => props.theme.colors.colorText};
    border-radius: 5px;
    padding: 10px;
    margin: auto;
`;

export const TextButtom = styled.Text`
  color: ${(props) => props.theme.colors.colorText};
  font-size: 28px;

`;

export const ContainerCard = styled.View`
    border: 1px solid black;
`;