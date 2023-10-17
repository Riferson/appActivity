import React from "react";
import { useNavigation } from "@react-navigation/native";
import { Container, ContainerProj, Img, Title } from "./styled";
import { BackHandler } from "react-native";
import { Alert } from "react-native";

import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

export default function Home() {
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
    <Container>
      <ContainerProj onPress={handleGaleriaOpen}>
        <FontAwesome name="image" size={100} color="black" />
        <Title>Galeria</Title>
      </ContainerProj>
      <ContainerProj onPress={handleContatosOpen}>
        <AntDesign name="contacts" size={100} color="black" />
        <Title>Contatos</Title>
      </ContainerProj>
      <ContainerProj onPress={handleExitApp}>
        <Img
          source={{
            uri: "https://cdn.icon-icons.com/icons2/1769/PNG/512/4115235-exit-logout-sign-out_114030.png",
          }}
        />
        <Title>Sair</Title>
      </ContainerProj>
      <ContainerProj
        onPress={() => {
          navigation.navigate("preferencias");
        }}
      >
        <Img
          source={{
            uri: "https://cdn.icon-icons.com/icons2/1769/PNG/512/4115235-exit-logout-sign-out_114030.png",
          }}
        />
        <Title>Options</Title>
      </ContainerProj>
    </Container>
  );
}
