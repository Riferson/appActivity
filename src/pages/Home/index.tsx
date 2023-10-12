import React from "react";
import { useNavigation } from "@react-navigation/native";
import {Container,ContainerProj,Img,Title} from './styled';
import { BackHandler } from 'react-native';
import { Alert } from 'react-native';


export default function Home(){
    const navigation = useNavigation();
     function handleGaleriaOpen(){
        navigation.navigate('galeria');
     }

     const handleExitApp = () => {
        Alert.alert(
          'Confirmação',
          'Tem certeza de que deseja sair?',
          [
            {
              text: 'Cancelar',
              style: 'cancel',
            },
            {
              text: 'Sair',
              onPress: () => {
                BackHandler.exitApp(); // Sair do aplicativo
              },
            },
          ],
          { cancelable: false }
        );
      };


    return(
            <Container>
                <ContainerProj onPress={handleGaleriaOpen}>
                    <Img source={{uri:'https://cdn.icon-icons.com/icons2/2440/PNG/512/gallery_icon_148533.png'}}/>
                    <Title>Galeriaa</Title>
                </ContainerProj>
                <ContainerProj onPress={()=>console.log('pipi')}>
                    <Img source={{uri:'https://cdn.icon-icons.com/icons2/2440/PNG/512/gallery_icon_148533.png'}}/>
                    <Title>Contatos</Title>
                </ContainerProj>
                <ContainerProj onPress={handleExitApp}>
                    <Img source={{uri:'https://cdn.icon-icons.com/icons2/1769/PNG/512/4115235-exit-logout-sign-out_114030.png'}}/>
                    <Title>Sair</Title>
                </ContainerProj>
            </Container>
    )
}