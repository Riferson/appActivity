import React, { useEffect, useState,useRef } from "react";
import { useNavigation } from "@react-navigation/native";
import {Container, CameraCustom,ContainerButtons,Back,TakePicture,FlipCam,Img } from "./Styled";
import {Text, View} from 'react-native'
import { CameraType,Camera } from "expo-camera";
import { TouchableOpacity } from "react-native-gesture-handler";
import {FontAwesome} from '@expo/vector-icons';
import { useDataContext } from "../../Context/DataContext";
import { Ionicons } from '@expo/vector-icons';
import { lightThemeStyles, loadThemePreference } from "../Theme/theme";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function CameraDefault(){
    const navigation = useNavigation();
    const camRef = useRef(null);
    const [type,setType] = useState(CameraType.back)
    const [hasPermission,setHasPermission] = useState(false);
    const {adicionarObjeto } = useDataContext();
    const [currentTheme, setCurrentTheme] = useState(lightThemeStyles);
    const [cameraProporcao, setCameraProporcao] = useState('4:3');
    
    const getCameraProporcao = async () => {
        try {
            const cameraProporcaoSalva = await AsyncStorage.getItem('cameraOption');
            setCameraProporcao(cameraProporcaoSalva);
        } catch (error) {
            console.error('Erro ao recuperar o tema: ', error);
            return lightThemeStyles; // Pode definir um tema padrão caso haja um erro
        }
    }

    useEffect(() => {
        getCameraProporcao();
      }, []);

    const loadTheme = async () => {
        try {
          const theme = await loadThemePreference();
          setCurrentTheme(theme);
        } catch (error) {
          console.error('Erro ao recuperar dados: ', error);
        }
      }
    
      useEffect(() => {
        loadTheme();
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
                    <Back onPress={handleGaleriaOpen}><Ionicons name="chevron-back" size={24} style={{ ...currentTheme, padding: 5 }} /></Back>
                     <TakePicture onPress={takeAPicture}><FontAwesome  name="camera" size={30} style={{ ...currentTheme, padding: 5 }} /></TakePicture>
                    <FlipCam onPress={handleSwitchCam}><Ionicons name="ios-camera-reverse" size={24} style={{ ...currentTheme, padding: 5 }} /></FlipCam>
                </ContainerButtons>
            </CameraCustom>
        </Container>
    )
}