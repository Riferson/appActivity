import React, { useState, useEffect } from "react";
import { View, Text, Alert } from 'react-native';
import { CheckBox } from "react-native-elements";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Container, Title, ContainerOptions, Options, Label, InputText, TouchableOpacity } from "./styled";
import { darkThemeStyles, lightThemeStyles, loadThemePreference } from "../Theme/theme";
import { useNavigation } from "@react-navigation/native";


export default function Preferencias() {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [idade, setIdade] = useState('');
  const [themeDark, setThemeDark] = useState(false);
  const [receberNotificacao, setReceberNotificacao] = useState(false);
  const [currentTheme, setCurrentTheme] = useState(lightThemeStyles);

  const loadPreferences = async () => {
    try {
      const nomeSalvo = await AsyncStorage.getItem('nome');
      if (nomeSalvo) setNome(nomeSalvo);
  
      const emailSalvo = await AsyncStorage.getItem('email');
      if (emailSalvo) setEmail(emailSalvo);
  
      const idadeSalva = await AsyncStorage.getItem('idade');
      if (idadeSalva) setIdade(idadeSalva);

      const receberNotificacaoSalvo = await AsyncStorage.getItem('receberNotificacao');
      if (receberNotificacaoSalvo) setReceberNotificacao(JSON.parse(receberNotificacaoSalvo));

      const temaSalvo = await AsyncStorage.getItem('themeDark');
      if (temaSalvo) setThemeDark(JSON.parse(temaSalvo))
    } catch (error) {
      console.error('Erro ao recuperar dados: ', error);
    }
  }

  useEffect(() => {
    // Execute a função loadPreferences ao abrir a página
    loadPreferences();
  }, []);

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

  const handleButtonPress = () => {
    try {
      AsyncStorage.setItem('nome', nome);
      AsyncStorage.setItem('email', email);
      AsyncStorage.setItem('idade', idade);
      AsyncStorage.setItem('themeDark', JSON.stringify(themeDark));
      AsyncStorage.setItem('receberNotificacao', JSON.stringify(receberNotificacao));

      Alert.alert('Configurações Salvas', 'Suas configurações foram salvas com sucesso!');
    } catch (error) {
      console.error('Erro ao salvar configurações: ', error);
    }
  }

  const handleButtonPressMostrar = async () => {
    try {
      const nomeSalvo = await AsyncStorage.getItem('nome');
      const emailSalvo = await AsyncStorage.getItem('email');
      const idadeSalva = await AsyncStorage.getItem('idade');
      const themeDarkSalvo = await AsyncStorage.getItem('themeDark');
      const receberNotificacaoSalvo = await AsyncStorage.getItem('receberNotificacao');

      const mensagem = `Nome: ${nomeSalvo}\nEmail: ${emailSalvo}\nIdade: ${idadeSalva}\nTema Dark: ${
        themeDark ? 'Ativado' : 'Desativado'
      }\nReceber Notificação: ${receberNotificacao ? 'Ativado' : 'Desativado'}`;

      Alert.alert('Dados Salvos', mensagem);
    } catch (error) {
      console.error('Erro ao recuperar dados: ', error);
    }
  }

  return (
    <Container style={currentTheme}>
      <Title style={currentTheme}>Preferências</Title>
      <ContainerOptions>
        <Options>
          <Label style={currentTheme}>Nome</Label>
          <InputText onChangeText={text => setNome(text)} value={nome} style={currentTheme} />
        </Options>
        <Options>
          <Label style={currentTheme}>Email</Label>
          <InputText onChangeText={text => setEmail(text)} value={email} style={currentTheme} />
        </Options>
        <Options>
          <Label style={currentTheme}>Idade</Label>
          <InputText onChangeText={text => setIdade(text)} value={idade} style={currentTheme} />
        </Options>
        <Options>
          <Label style={currentTheme}>Theme dark</Label>
          <CheckBox
          checked={themeDark}
          onPress={() => {
            setThemeDark(!themeDark); // Atualiza o estado do CheckBox
            setCurrentTheme(themeDark ? lightThemeStyles : darkThemeStyles);
          }}
        />
        </Options>
        <Options>
          <Label style={currentTheme}>Receber Notificação</Label>
          <CheckBox checked={receberNotificacao} onPress={() => setReceberNotificacao(!receberNotificacao)} />
        </Options>
      </ContainerOptions>
      <View>
        <TouchableOpacity onPress={handleButtonPress}>
          <Text style={{ color: 'white'}}>Salvar Configurações</Text>
        </TouchableOpacity>

      <TouchableOpacity onPress={handleButtonPressMostrar}>
          <Text style={{ color: 'white'}}>Mostrar Configurações salvas</Text>
        </TouchableOpacity>
      </View>
    </Container>
  );
}
