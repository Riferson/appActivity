import React, { useEffect, useState,useRef } from "react";
import { useNavigation } from "@react-navigation/native";
import {Container, CameraCustom,ContainerButtons,Back,TakePicture,FlipCam,Img } from "./Styled";
import {Text, View} from 'react-native'
import { CameraType,Camera } from "expo-camera";
import { TouchableOpacity } from "react-native-gesture-handler";
import {FontAwesome} from '@expo/vector-icons';
import { useDataContext } from "../../Context/DataContext";
import { Ionicons } from '@expo/vector-icons';
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function CameraDefault(){
    const navigation = useNavigation();
    const camRef = useRef(null);
    const [type,setType] = useState(CameraType.back)
    const [hasPermission,setHasPermission] = useState(false);
    const {adicionarObjeto } = useDataContext();

    const [cameraProporcao, setCameraProporcao] = useState('4:3');

    const getCameraProporcao = async () => {
        try {
            const cameraProporcaoSalva = await AsyncStorage.getItem('cameraOption');
            setCameraProporcao(cameraProporcaoSalva);
        } catch (error) {
            console.error('Erro ao recuperar o tema: ', error);
        }
    }

    useEffect(() => {
        getCameraProporcao();
      }, []);

    useEffect(()=>{
        (async()=>{
            const {status} = await Camera.requestCameraPermissionsAsync();
            setHasPermission(status ==='granted');
        })()
    },[]);

    if(hasPermission === null){
        return(<View/>);
    }
    if(hasPermission===false ){
        return(<><Text>Acesso negado</Text><TouchableOpacity onPress={() => { handleGaleriaOpen(); } }><Text>Voltar</Text></TouchableOpacity></>)
    }

     function handleGaleriaOpen(){
         navigation.navigate('galeria');
     }
     function handleSwitchCam(){
        if(type === CameraType.back){
            setType(CameraType.front);
        }else{
            setType(CameraType.back);
        }
     }
     async function takeAPicture(){
        if(camRef ){
            const data:any = await camRef.current.takePictureAsync();
            let temp = {uri:data.uri}
            adicionarObjeto(temp);
            handleGaleriaOpen()
        }
     }

    return(
        <Container>
            <CameraCustom type={type} ref={camRef} ratio={cameraProporcao}>
                <ContainerButtons>
                    <Back onPress={handleGaleriaOpen}><Ionicons name="chevron-back" size={24} color="white" /></Back>
                     <TakePicture onPress={takeAPicture}><FontAwesome  name="camera" size={30} color="white" /></TakePicture>
                    <FlipCam onPress={handleSwitchCam}><Ionicons name="ios-camera-reverse" size={24} color="white" /></FlipCam>
                </ContainerButtons>
            </CameraCustom>
        </Container>
    )
}