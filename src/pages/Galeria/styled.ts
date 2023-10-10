import styled from "styled-components/native";
import { Camera,CameraType } from "expo-camera";


export const Container = styled.View`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
export const Title = styled.Text`
    font-size: 32px;
`;
export const ContainerImagens = styled.View`
border: 1px solid grey;
height: 80%;
width: 100%;

`;

export const ContainerImg= styled.View`
    padding-top: 10px;
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 5px;
    justify-content: center;

`;

export const Img= styled.Image`
    width: 120px;
    height: 120px;
    border: solid 1px grey;
    border-radius: 10px;
`;

export const ScrollViewImagens = styled.ScrollView`
   
`;

export const ContainerCamera = styled.View`

`;