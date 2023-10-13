import { Camera } from "expo-camera";
import styled from "styled-components/native";

export const CameraCustom = styled(Camera)`
    width: 100%;
    
    flex: 1;
    flex-direction: column;
    align-items: end;
    justify-content: end;
`;

export const Container = styled.View`
    flex: 1;
    height: 30%;
    margin-top: 30px;
 
`;


export const ContainerButtons = styled.View`
    flex: 1;
`;

export const Back = styled.TouchableOpacity`
    position: absolute;
    bottom: 3%;
    left: 10%;
`;

export const TakePicture = styled.TouchableOpacity`
 position: absolute;
    bottom: 3%;
    left: 46.5%;
`;

export const FlipCam = styled.TouchableOpacity`
    position: absolute;
    bottom: 3%;
    left: 80%;
`;

export const Img= styled.Image`
    width: 120px;
    height: 120px;
    border: 1px ;
    border-radius: 10px;
`;
