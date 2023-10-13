import {Container,Title,ContainerImagens,ContainerCamera,ScrollViewImagens,ContainerImg,Img,ContainerStyleImg,ContainerHead} from './styled';
import React, { useState,useEffect } from "react";
import { TouchableOpacity,Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useDataContext } from '../../Context/DataContext';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons'; 

export default function Galeria(){
    const { objetos } = useDataContext(); 

    const navigation = useNavigation();
     function handleCameraOpen(){
        navigation.navigate('camera');
     }

    return(
    <Container>
        <ContainerHead>
            <TouchableOpacity onPress={()=>{navigation.navigate('home');}}>
                <Ionicons name="arrow-back" size={44} color="black" />
            </TouchableOpacity>
        <Title>Galeria</Title>

        </ContainerHead>
        <ContainerImagens>
            <ScrollViewImagens>
                <ContainerImg>
                    { objetos && objetos.length>0? (objetos.map((objeto, index) => (
                        <ContainerStyleImg key={index}>
                            <Img source={{ uri: objeto.uri }} />
                         </ContainerStyleImg>
                    ))) : (<Text>Nenhum imagem disponível.</Text>)}
 
                </ContainerImg>
            </ScrollViewImagens>
        </ContainerImagens>
        <ContainerCamera>
            <TouchableOpacity  onPress={handleCameraOpen}><FontAwesome name="camera-retro" size={42} color="black" /></TouchableOpacity>
        </ContainerCamera>
    </Container>
    );
}