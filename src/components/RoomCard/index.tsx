import React from 'react'
import {Container,ContainerContent,ContainerImg,ImgRoom,CointainerDescription,Title,SubTitle} from './styled';
import { useNavigation } from '@react-navigation/native';

export default function RoomCard(){
    const navigation = useNavigation();
    return(
        <Container>
            <ContainerContent onPress={() => { navigation.navigate("RoomReservationDetails"); }}>
                <ContainerImg>
                    <ImgRoom source={{uri:'https://www.multimeios.pt/wp-content/uploads/2019/10/foto_Polivalente.jpg'}}/>
                </ContainerImg>
                <CointainerDescription>
                    <Title>Nome da sala</Title>
                    <SubTitle>Capacidade em pé: </SubTitle>
                    <SubTitle>Capacidade sentados: </SubTitle>
                    <SubTitle>Posui mesa: </SubTitle>
                    <SubTitle>Possui Cadeiras: </SubTitle>
                    <SubTitle>Acessorios: </SubTitle>
                </CointainerDescription>
            </ContainerContent>
        </Container>
    )
}