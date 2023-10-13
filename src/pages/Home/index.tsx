import React from "react";
import { useNavigation } from "@react-navigation/native";
import {Container,ContainerProj,Img,Title} from './styled';

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
                    <Img source={{uri:'https://cdn.icon-icons.com/icons2/2440/PNG/512/gallery_icon_148533.png'}}/>
                    <Title>Galeriaa</Title>
                </ContainerProj>
                <ContainerProj onPress={handleContatosOpen}>
                    <Img source={{uri:'https://cdn.icon-icons.com/icons2/2440/PNG/512/gallery_icon_148533.png'}}/>
                    <Title>Contatos</Title>
                </ContainerProj>
            </Container>
    )
}