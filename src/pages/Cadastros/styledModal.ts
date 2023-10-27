import styled from "styled-components/native";

export const ContainerModal = styled.View`
    background-color: ${(props) => props.theme.colors.background};
    height: 100%;
    padding: 20px;
`;

export const ContainerTitleModal = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const TitleModal = styled.Text`
    color: ${(props) => props.theme.colors.colorText};
    margin: 0 0 0 15%;
    font-size: 20px;
`;


export const ContainerFormularioModal = styled.View``;


export const ContainerInputModal = styled.View`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 5px 0 5px 0;
    justify-content: space-between;
    width: 99%;
`;


export const LabelModal = styled.Text`
    color: ${(props) => props.theme.colors.colorText};
    margin-left: 5px;
    font-size: 20px;
`;

export const ContainerSubmiteModal = styled.View`
margin-top: 30px;
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

export const SubmiteModal = styled.TouchableOpacity`
        border-radius: 5px;
        width: 50%;
        justify-content: center;
        margin: auto;
        border: 1px solid ${(props) => props.theme.colors.colorText};
        color: ${(props) => props.theme.colors.colorText};
`;

export const TextModal = styled.Text`
    text-align: center;
    font-size: 18px;
    color: ${(props) => props.theme.colors.colorText};
`;

export const InputTextModal = styled.TextInput`
    border: 1px solid ${(props) => props.theme.colors.colorText};
    width: 60%;
    font-size: 18px;
    align-items: center;
    text-align:end;
    padding: 5px;
`;



