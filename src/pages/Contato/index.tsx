import React, { useEffect, useState } from "react";
import {
  Container,
  Button,
  Text,
  ButtonText,
  ContactCard,
  iconStyles,
  View,
  ImgContainer,
} from "./Styled";
import { lightThemeStyles, loadThemePreference } from "../Theme/theme";
import { Ionicons } from "@expo/vector-icons";

export default function ContactDetail({ route }) {
  const { contact } = route.params;
  const [currentTheme, setCurrentTheme] = useState(lightThemeStyles);

  const loadTheme = async () => {
    try {
      const theme = await loadThemePreference();
      setCurrentTheme(theme);
    } catch (error) {
      console.error("Erro ao recuperar dados: ", error);
    }
  };

  useEffect(() => {
    loadTheme();
  }, []);

  return (
    <Container>
      <ImgContainer>
        <Ionicons name="person" size={200} />
      </ImgContainer>

      <Text>Nome: {contact.name}</Text>
      <Text>
        Número de telefone:{" "}
        {contact.phoneNumbers && contact.phoneNumbers[0]?.number}
      </Text>
      {contact.emails && contact.emails[0]?.email && (
        <Text>Email: {contact.emails[0].email}</Text>
      )}
      {contact.jobTitle && <Text>Cargo: {contact.jobTitle}</Text>}
    </Container>
  );
}
