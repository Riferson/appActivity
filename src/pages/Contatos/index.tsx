import React, { useState, useEffect } from 'react';
import * as Contacts from 'expo-contacts';
import { useNavigation } from "@react-navigation/native";
import { Container, Button, Text, ButtonText, ContactCard, Img, View,ContainerHead,Title } from './Styled';
import { TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons'; 
import AsyncStorage from '@react-native-async-storage/async-storage';
import { lightThemeStyles, loadThemePreference } from '../Theme/theme';


export default function App() {
  const navigation = useNavigation();
  const navigateToContactDetail = (contact) => {
    navigation.navigate('contato', { contact });
  }

  const [currentTheme, setCurrentTheme] = useState(lightThemeStyles);
  const [contacts, setContacts] = useState([]);

  const getContacts = async () => {
    const { status } = await Contacts.requestPermissionsAsync();
    if (status === 'granted') {
      const { data } = await Contacts.getContactsAsync({});
      if (data.length > 0) {
        const filteredContacts = data.filter(contact => contact.phoneNumbers && contact.phoneNumbers.length > 0);

        if (filteredContacts.length > 0) {
          const sortedContacts = filteredContacts.sort((a, b) => {
            return a.name.localeCompare(b.name);
          });
          setContacts(sortedContacts);
        }
      }
    } else {
      console.warn('Permissão para acessar os contatos foi negada');
    }
  }

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
      <ContainerHead>
            <TouchableOpacity onPress={()=>{navigation.navigate('home');}}>
                <Ionicons name="arrow-back" size={44} style={currentTheme} />
            </TouchableOpacity>
        <Title style={currentTheme}>Contatos</Title>

        </ContainerHead>
      <View>
      <Button onPress={getContacts}>
        <ButtonText>Exibir lista de contatos</ButtonText>
      </Button>
        {contacts.map((contact, i) => (
          <ContactCard key={i} onPress={() => navigateToContactDetail(contact)}>
              <Ionicons name="person" size={24} style={currentTheme} />
              <Text style={currentTheme}>{contact.name}</Text>
              <Text style={currentTheme}>Clique para ver os detalhes do contato</Text>
          </ContactCard>
        ))}
      </View>
    </Container>
  );
}
