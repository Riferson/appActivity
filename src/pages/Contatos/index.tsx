import React, { useState, useEffect } from 'react';
import * as Contacts from 'expo-contacts';
import { useNavigation } from "@react-navigation/native";
import { Container, Button, Text, ButtonText, ContactCard, Img, View } from './Styled';

export default function App() {
  const navigation = useNavigation();
  const navigateToContactDetail = (contact) => {
    navigation.navigate('contato', { contact });
  }

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

  return (
    <Container>
      <View>
      <Button onPress={getContacts}>
        <ButtonText>Exibir lista de contatos</ButtonText>
      </Button>
        {contacts.map((contact, i) => (
          <ContactCard key={i} onPress={() => navigateToContactDetail(contact)}>
              <Img source={{ uri: 'https://cdn.icon-icons.com/icons2/1288/PNG/512/1499345621-contact_85338.png' }} />
              <Text>{contact.name}</Text>
              <Text>Clique para ver os detalhes do contato</Text>
          </ContactCard>
        ))}
      </View>
    </Container>
  );
}
