import React from 'react';
import { Container, Button, Text, ButtonText, ContactCard, Img, View, ImgContainer } from './Styled';

export default function ContactDetail({ route }) {
  const { contact } = route.params;

  return (
    <Container>
      <ImgContainer>
        <Img source={{ uri: 'https://cdn.icon-icons.com/icons2/1288/PNG/512/1499345621-contact_85338.png' }} />
    </ImgContainer>
      
      <Text>Nome: {contact.name}</Text>
      <Text>Número de telefone: {contact.phoneNumbers && contact.phoneNumbers[0]?.number}</Text>
      {contact.emails && contact.emails[0]?.email && <Text>Email: {contact.emails[0].email}</Text>}
      {contact.jobTitle && <Text>Cargo: {contact.jobTitle}</Text>}
    </Container>
  );
}
