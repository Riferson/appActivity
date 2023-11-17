import React from 'react'
import {Container,Title,AddNewRomButton,RoomListContainer,ScrollViewRooms} from './styled';
import RoomCard from '../../components/RoomCard';

export default function RoomReservation(){
    return(
        <Container>
            <Title>Salas Disponíveis para Reservas</Title>
            <AddNewRomButton>
                <Title>Adicionar nova</Title>
            </AddNewRomButton>
            <RoomListContainer>
                <ScrollViewRooms>
                    <RoomCard/>
                    <RoomCard/>
                    <RoomCard/>
                </ScrollViewRooms>
            </RoomListContainer>
        </Container>
    )
}