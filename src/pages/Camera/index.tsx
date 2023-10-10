import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";

import {Container, CameraCustom } from "./Styled";

import { CameraType,Camera } from "expo-camera";

export default function CameraDefault(){
    const navigation = useNavigation();
    const [type,setType] = useState(CameraType.back)
    const [hasPermission,setHasPermission] = useState(false);

    useEffect(()=>{
        (async()=>{
            const {status} = await Camera.requestCameraPermissionsAsync();
            setHasPermission(status ==='granted');
        })()
    },[]);

    if(hasPermission === null || hasPermission===false){
        console.log('aaaaa');
        return(
            <></>
        )
    }

     function handleGaleriaOpen(){
        navigation.navigate('galeria');
     }

    return(
        <Container>
            <CameraCustom type={type}/>
        </Container>
    )
}