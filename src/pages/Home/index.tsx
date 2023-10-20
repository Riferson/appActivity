import React, { useContext, useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Container, ContainerProj, Img, Title } from "./styled";
import { BackHandler, View } from "react-native";
import { Alert } from "react-native";

import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { useTheme } from "styled-components/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ThemeContext } from "../Theme/theme";

export default function Home() {
  const { colors } = useTheme();
  const { toggleTheme } = useContext(ThemeContext);

  const navigation = useNavigation();
  const [themeDark, setThemeDark] = useState(false);

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

  async function loadPreferences() {
    try {
      const temaSalvo = await AsyncStorage.getItem("themeDark");
      if (temaSalvo) setThemeDark(JSON.parse(temaSalvo));
      if (temaSalvo === "true") {
        toggleTheme();
      }
    } catch (error) {
      console.error("Erro ao recuperar dados: ", error);
    }
  }

  useEffect(() => {
    loadPreferences();
  }, []);

  return (
    <Container>
      <ContainerProj onPress={handleGaleriaOpen}>
        <FontAwesome name="image" size={100} color={colors.colorText} />
        <Title>Galeria</Title>
      </ContainerProj>
      <ContainerProj onPress={handleContatosOpen}>
        <AntDesign name="contacts" size={100} color={colors.colorText} />
        <Title>Contatos</Title>
      </ContainerProj>
      <ContainerProj
        onPress={() => {
          navigation.navigate("preferencias");
        }}
      >
        <AntDesign name="setting" size={100} color={colors.colorText} />
        <Title>Options</Title>
      </ContainerProj>
      <ContainerProj onPress={handleExitApp}>
        <FontAwesome name="sign-out" size={100} color={colors.colorText} />
        <Title>Sair</Title>
      </ContainerProj>
    </Container>
  );
}
