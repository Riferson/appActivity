import React, { useEffect, useRef, useState } from "react";
import { Camera ,CameraType} from "expo-camera";
import {Container,ContainerToggleCam,ButtonFlip} from './styled';
import { View,Text } from "react-native";

export default function CameraCustom(){
    const [hasPermission, setHasPermission] = useState(null);
  const [type, setType] = useState(CameraType.back);
  const cameraRef = useRef(null);

  useEffect(() => {
    (async () => {
        const status = await Camera.useCameraPermissions();
      setHasPermission(status);
    })();
  }, []);

  const handleCameraTypeToggle = () => {
    setType(
      type === CameraType.back
        ? CameraType.front
        : CameraType.back
    );
  };

  const handleTakePicture = async () => {
    if (cameraRef.current) {
      const photo = await cameraRef.current.takePictureAsync();
      console.log(photo);
      // Aqui, você pode lidar com a foto tirada, como salvá-la ou exibi-la.
    }
  };

  if (hasPermission === null) {
    return <View />;
    //retornar para a tela anterior

  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
    //retornar para a tela anterior
  }

    return(
        <Container>
            <Camera style={{flex:1}}>

            <ContainerToggleCam>
                <ButtonFlip onPress={handleCameraTypeToggle}>
                    <Text>Flip Cam</Text>
                </ButtonFlip>
                <ButtonFlip onPress={handleTakePicture}>
                    <Text>Capturar</Text>
                </ButtonFlip>
            </ContainerToggleCam>
            </Camera>
        </Container>
    )
}