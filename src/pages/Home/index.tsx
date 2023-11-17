import React, { useContext, useEffect, useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Container, ContainerProj, Text, Title, ContainerTitle, View, SubTitle } from "./styled";
import { BackHandler } from "react-native";
import { Alert } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { useTheme } from "styled-components/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { ThemeContext } from "../Theme/theme";

export default function Home() {
  const { colors } = useTheme();
  const { toggleTheme } = useContext(ThemeContext);
  const [nomeUsuario, setNomeUsuario] = useState('');

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

  async function loadPreferences() {
    try {
      const nomeSalvo = await AsyncStorage.getItem("nome");
      setNomeUsuario(nomeSalvo);

    } catch (error) {
      console.error("Erro ao recuperar dados: ", error);
    }
  }

  useEffect(() => {
    loadPreferences();
  }, []);

  return (
    <Container>
      <ContainerTitle>
        <Title>Aplicativo - DDM</Title>
      </ContainerTitle>
      <View>
        <SubTitle>Bem-vindo, {nomeUsuario}!</SubTitle>
        <ContainerProj onPress={handleGaleriaOpen}>
          <FontAwesome name="image" size={70} color={colors.colorText} />
          <Text>Galeria</Text>
        </ContainerProj>
        <ContainerProj onPress={handleContatosOpen}>
          <AntDesign name="contacts" size={70} color={colors.colorText} />
          <Text>Contatos</Text>
        </ContainerProj>
        <ContainerProj
          onPress={() => {
            navigation.navigate("preferencias");
          }}
        >
          <AntDesign name="setting" size={70} color={colors.colorText} />
          <Text>Options</Text>
        </ContainerProj>
        <ContainerProj onPress={() => { navigation.navigate("cadastros"); }}>
          <FontAwesome name="save" size={70} color={colors.colorText} />
          <Text>Cadastro Pessoas</Text>
        </ContainerProj>
        <ContainerProj onPress={() => { navigation.navigate("cadastros2"); }}>
          <FontAwesome name="tasks" size={70} color={colors.colorText} />
          <Text>Cadastro Tarefas</Text>
        </ContainerProj>
        <ContainerProj onPress={() => { navigation.navigate("RoomReservation"); }}>
          <FontAwesome name="save" size={70} color={colors.colorText} />
          <Text>Reserva Sala</Text>
        </ContainerProj>
        <ContainerProj onPress={handleExitApp}>
          <FontAwesome name="sign-out" size={70} color={colors.colorText} />
          <Text>Sair</Text>
        </ContainerProj>
      </View>
    </Container>
  );
}
