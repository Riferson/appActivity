import React, { useContext, useEffect, useState } from "react";
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
import { Ionicons } from "@expo/vector-icons";
import { ThemeContext } from "../Theme/theme";
import { useTheme } from "styled-components";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useNavigation } from "@react-navigation/native";

export default function ContactDetail({ route }) {
  const navigation = useNavigation();
  const { contact } = route.params;
  const { colors } = useTheme();

  return (
    <Container>
          <Button onPress={() => {navigation.navigate("contatos");}}><Ionicons name="arrow-back" size={44} color={colors.colorText} /></Button>
      <ImgContainer>
        <Ionicons name="person" size={200} color={colors.colorText} />
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
