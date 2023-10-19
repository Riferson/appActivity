import React, { useEffect, useState } from 'react';
import { Container, Button, Text, ButtonText, ContactCard, iconStyles, View, ImgContainer } from './Styled';
import { lightThemeStyles, loadThemePreference } from '../Theme/theme';
import { Ionicons } from '@expo/vector-icons';

export default function ContactDetail({ route }) {
  const { contact } = route.params;
  const [currentTheme, setCurrentTheme] = useState(lightThemeStyles);

  const loadTheme = async () => {
    try {
      const theme = await loadThemePreference();
      setCurrentTheme(theme);
    } catch (error) {
      console.error('Erro ao recuperar dados: ', error);
    }
  }

  useEffect(() => {
    loadTheme();
  }, []);

  return (
    <Container style={currentTheme}>
      <ImgContainer>
      <Ionicons name="person" size={200} style={currentTheme}/>
    </ImgContainer>
      
      <Text style={currentTheme}>Nome: {contact.name}</Text>
      <Text style={currentTheme}>Número de telefone: {contact.phoneNumbers && contact.phoneNumbers[0]?.number}</Text>
      {contact.emails && contact.emails[0]?.email && <Text style={currentTheme}>Email: {contact.emails[0].email}</Text>}
      {contact.jobTitle && <Text style={currentTheme}>Cargo: {contact.jobTitle}</Text>}
    </Container>
  );
}
