import React from "react";
import { useNavigation } from "@react-navigation/native";
import {Container,ContainerProj,Img,Title} from './styled';
import { AntDesign } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons'; 

export default function Home(){
    const navigation = useNavigation();
     function handleGaleriaOpen(){
        navigation.navigate('galeria');
     }

     function handleContatosOpen(){
        navigation.navigate('contatos')
     }

    return(
            <Container>
                <ContainerProj onPress={handleGaleriaOpen}>
                    <FontAwesome name="image" size={100} color="black" />
                    <Title>Galeria</Title>
                </ContainerProj>
                <ContainerProj onPress={handleContatosOpen}>
                    <Img source={{uri:'https://cdn.icon-icons.com/icons2/2440/PNG/512/gallery_icon_148533.png'}}/>
                    <Title>Contatos</Title>
                </ContainerProj>
            </Container>
    )
}