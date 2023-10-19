import React, { useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Container, ContainerProj, Img, Title } from "./styled";
import { BackHandler, View } from "react-native";
import { Alert } from "react-native";

import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { lightThemeStyles, loadThemePreference } from '../Theme/theme';

export default function Home() {

  const [currentTheme, setCurrentTheme] = useState(lightThemeStyles);

  // Função que carrega o tema assim que a página é aberta
  const carregarTema = async () => {
    try {
      const theme = await loadThemePreference();
      setCurrentTheme(theme);
    } catch (error) {
      console.error('Erro ao recuperar dados: ', error);
    }
  };

  // Chamando a função de carregamento do tema imediatamente
  carregarTema();

  const navigation = useNavigation();
  function handleGaleriaOpen() {
    navigation.navigate("galeria");
  }
  const handleExitApp = () => {
    Alert.alert(
      "Confirmação",
      "Tem certeza de que deseja sair?",
      [
        {
          text: "Cancelar",
          style: "cancel",
        },
        {
          text: "Sair",
          onPress: () => {
            BackHandler.exitApp(); // Sair do aplicativo
          },
        },
      ],
      { cancelable: false }
    );
  };

  function handleContatosOpen() {
    navigation.navigate("contatos");
  }

  return (
    <Container style={currentTheme}>
    <ContainerProj onPress={handleGaleriaOpen}>
      <FontAwesome name="image" size={100} color="black" style={currentTheme} />
      <Title style={currentTheme}>Galeria</Title>
    </ContainerProj>
    <ContainerProj onPress={handleContatosOpen}>
      <AntDesign name="contacts" size={100} style={currentTheme} />
      <Title style={currentTheme}>Contatos</Title>
    </ContainerProj>
    <ContainerProj
      onPress={() => {
        navigation.navigate("preferencias");
      }}
    >
      <AntDesign name="setting" size={100} style={currentTheme} />
      <Title style={currentTheme}>Options</Title>
    </ContainerProj>
    <ContainerProj onPress={handleExitApp}>
      <FontAwesome name="sign-out" size={100} style={currentTheme} />
      <Title style={currentTheme}>Sair</Title>
    </ContainerProj>
  </Container>
  );
}
