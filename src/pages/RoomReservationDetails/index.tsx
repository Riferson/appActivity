import React from 'react'
import {Container,ContainerImage,ImageRoom,Title,ContainerContent,ContainerCalendar,ContainerDescription,ContainerButton,ConfirmButton} from './styled';

export default function RoomReservationDetails(){
    return(
        <Container>
            <ContainerImage>
                <ImageRoom  source={{uri:'https://www.multimeios.pt/wp-content/uploads/2019/10/foto_Polivalente.jpg'}}/>
            </ContainerImage>
            <ContainerContent>
                <Title>Nome da sala</Title>
                <ContainerCalendar>

                </ContainerCalendar>
                <ContainerDescription>

                </ContainerDescription>
                <ContainerButton>
                    <ConfirmButton><Title>Agendar</Title></ConfirmButton>
                </ContainerButton>
            </ContainerContent>
        </Container>
    )
}