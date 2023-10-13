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

    return(
            <Container>
                <ContainerProj onPress={handleGaleriaOpen}>
                    <FontAwesome name="image" size={100} color="black" />
                    <Title>Galeria</Title>
                </ContainerProj>
                <ContainerProj>
                <AntDesign name="contacts" size={100} color="black" />
                    <Title>Contatos</Title>
                </ContainerProj>
            </Container>
    )
}