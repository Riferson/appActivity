import React, { useState, useEffect, useContext } from "react";
import { View, Text, Alert } from "react-native";
import { Ionicons } from "@expo/vector-icons";

import { CheckBox } from "react-native-elements";
import AsyncStorage from "@react-native-async-storage/async-storage";
import {
  Container,
  Title,
  ContainerOptions,
  Options,
  Label,
  InputText,
  TouchableOpacity,
  ContainerHead,
  TouchableOpacityBack,
} from "./styled";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "styled-components/native";
import { ThemeContext } from "../Theme/theme";
import { Picker } from '@react-native-picker/picker';

export default function Preferencias() {
  const { toggleTheme } = useContext(ThemeContext);
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [idade, setIdade] = useState("");
  const [themeDark, setThemeDark] = useState(false);
  const navigation = useNavigation();
  const { colors } = useTheme();
  const [cameraOption, setCameraOption] = useState('4:3');
  const cameraOptions = ['4:3', '16:9', '1:1'];

  const loadPreferences = async () => {
    try {
      const nomeSalvo = await AsyncStorage.getItem("nome");
      if (nomeSalvo) setNome(nomeSalvo);

      const emailSalvo = await AsyncStorage.getItem("email");
      if (emailSalvo) setEmail(emailSalvo);

      const idadeSalva = await AsyncStorage.getItem("idade");
      if (idadeSalva) setIdade(idadeSalva);

      const temaSalvo = await AsyncStorage.getItem("themeDark");
      if (temaSalvo) {
        setThemeDark(JSON.parse(temaSalvo));
        if (temaSalvo === true) {
          toggleTheme();
        }
      }

      const cameraOptionSalva = await AsyncStorage.getItem('cameraOption');
      if (cameraOptionSalva) setCameraOption(cameraOptionSalva);
    } catch (error) {
      console.error("Erro ao recuperar dados: ", error);
    }
  };

  useEffect(() => {
    loadPreferences();

  }, []);
  const handleButtonPress = () => {
    try {
      AsyncStorage.setItem("nome", nome);
      AsyncStorage.setItem("email", email);
      AsyncStorage.setItem("idade", idade);
      AsyncStorage.setItem("themeDark", JSON.stringify(themeDark));
      AsyncStorage.setItem('cameraOption', cameraOption);

      Alert.alert(
        "Configurações Salvas",
        "Suas configurações foram salvas com sucesso!"
      );
    } catch (error) {
      console.error("Erro ao salvar configurações: ", error);
    }
  };

  const handleButtonPressMostrar = async () => {
    try {
      const nomeSalvo = await AsyncStorage.getItem("nome");
      const emailSalvo = await AsyncStorage.getItem("email");
      const idadeSalva = await AsyncStorage.getItem("idade");

      const mensagem = `Nome: ${nomeSalvo}\nEmail: ${emailSalvo}\nIdade: ${idadeSalva}\nTema Dark: ${
        themeDark ? "Ativado" : "Desativado"
      }\nResolução da Câmera: ${cameraOption}`;

      Alert.alert("Dados Salvos", mensagem);
    } catch (error) {
      console.error("Erro ao recuperar dados: ", error);
    }
  };

  function handleChangeTheme() {
    setThemeDark(!themeDark);
    toggleTheme();
  }

  return (
    <Container>
      <ContainerHead>
        <TouchableOpacityBack
          onPress={() => {
            navigation.navigate("home");
          }}
        >
          <Ionicons name="arrow-back" size={44} color={colors.colorText} />
        </TouchableOpacityBack>
        <Title>Preferências</Title>
      </ContainerHead>

      <ContainerOptions>
        <Options>
          <Label>Nome</Label>
          <InputText onChangeText={(text) => setNome(text)} value={nome} />
        </Options>
        <Options>
          <Label>Email</Label>
          <InputText onChangeText={(text) => setEmail(text)} value={email} />
        </Options>
        <Options>
          <Label>Idade</Label>
          <InputText onChangeText={(text) => setIdade(text)} value={idade} />
        </Options>
        <Options>
          <Label>Theme dark</Label>
          <CheckBox checked={themeDark} onPress={handleChangeTheme} />
        </Options>
        <Options>
          <Label>Opções de Câmera</Label>
          <View style={{ borderColor: 'gray', borderWidth: 1, borderRadius: 5 }}>
            <Picker
              selectedValue={cameraOption}
              onValueChange={(itemValue) => setCameraOption(itemValue)}
              style={{ width: 200, height: 40, color: colors.colorText }}
            >
              {cameraOptions.map((option, index) => (
                <Picker.Item key={index} label={option} value={option} />
              ))}
            </Picker>
          </View>
      </Options>
      </ContainerOptions>
      <View>
        <TouchableOpacity onPress={handleButtonPress}>
          <Text style={{ color: "white" }}>Salvar Configurações</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={handleButtonPressMostrar}>
          <Text style={{ color: "white" }}>Mostrar Configurações salvas</Text>
        </TouchableOpacity>
      </View>
    </Container>
  );
}
