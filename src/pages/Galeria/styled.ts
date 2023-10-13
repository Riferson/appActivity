import styled from "styled-components/native";
import { Camera,CameraType } from "expo-camera";


export const Container = styled.View`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
`;
export const Title = styled.Text`
    font-size: 32px;
  text-align: center;
  flex: 1; 
  margin-right: 35px;
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

`;
export const ContainerStyleImg = styled.View`
        border: solid 1px grey;
    border-radius: 10px;
`;
export const ScrollViewImagens = styled.ScrollView`
   
`;

export const ContainerCamera = styled.View`
    margin-top: 40px;
`;

export const ContainerHead = styled.View`
flex-direction: row;
  align-items: center;
  justify-content: space-around;
`;