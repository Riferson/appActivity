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
    background-color: ${(props) => props.theme.colors.backgroundSecondary};
    margin: 0;
    padding: 20px;
`;

export const TitleModal = styled.Text`
    color: ${(props) => props.theme.colors.colorTextSecondary};
    margin: 0 0 0 15%;
    font-size: 20px;
    font-weight: 600;
`;


export const ContainerFormularioModal = styled.View``;


export const ContainerInputModal = styled.View`
    display: flex;
    align-items: left;
    margin: 10px auto;
    justify-content: space-between;
    width: 90%;
`;


export const LabelModal = styled.Text`
    color: ${(props) => props.theme.colors.colorText};
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
        color: ${(props) => props.theme.colors.colorText};
`;

export const TextModal = styled.Text`
    border-radius: 10px;
    text-align: center;
    font-size: 18px;
    padding: 10px;
    background-color: ${(props) => props.theme.colors.backgroundSecondary};
    color: ${(props) => props.theme.colors.colorTextSecondary};
`;

export const InputTextModal = styled.TextInput`
    border: 1px solid ${(props) => props.theme.colors.colorText};
    font-size: 18px;
    align-items: center;
    text-align:end;
    padding: 5px;
    border-radius: 10px
`;



