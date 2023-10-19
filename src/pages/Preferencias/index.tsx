import React, { useState } from "react";
import { View, Text, TouchableOpacity, Alert } from 'react-native';
import { CheckBox } from "react-native-elements";
import AsyncStorage from '@react-native-async-storage/async-storage'; // Importe o AsyncStorage
import {
  Container,
  Title,
  ContainerOptions,
  Options,
  Label,
  InputText,
} from "./styled";

export default function Preferencias() {
  const [nome, setNome] = useState(''); // Estado para armazenar o nome
  const [email, setEmail] = useState(''); // Estado para armazenar o email
  const [idade, setIdade] = useState(''); // Estado para armazenar a idade
  const [themeDark, setThemeDark] = useState(false); // Estado para armazenar a configuração do tema escuro
  const [receberNotificacao, setReceberNotificacao] = useState(false); // Estado para armazenar a configuração de notificação

  const handleButtonPress = () => {
    // Salve as configurações usando AsyncStorage
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

  const handleButtonPressMostrar = async () =>{
    try {
      // Use AsyncStorage para recuperar os dados salvos
      const nomeSalvo = await AsyncStorage.getItem('nome');
      const emailSalvo = await AsyncStorage.getItem('email');
      const idadeSalva = await AsyncStorage.getItem('idade');
      const themeDarkSalvo = await AsyncStorage.getItem('themeDark');
      const receberNotificacaoSalvo = await AsyncStorage.getItem('receberNotificacao');

  
      // Crie uma mensagem com os dados recuperados
      const mensagem = `Nome: ${nomeSalvo}\nEmail: ${emailSalvo}\nIdade: ${idadeSalva}\nTema Dark: ${themeDark ? 'Ativado' : 'Desativado'}\nReceber Notificação: ${receberNotificacao ? 'Ativado' : 'Desativado'}`;
  
      // Exiba os dados em um alerta
      Alert.alert('Dados Salvos', mensagem);
    } catch (error) {
      console.error('Erro ao recuperar dados: ', error);
    }
  }

  return (
    <Container>
      <Title>Preferências</Title>
      <ContainerOptions>
        <Options>
          <Label>Nome</Label>
          <InputText onChangeText={text => setNome(text)} value={nome} />
        </Options>
        <Options>
          <Label>Email</Label>
          <InputText onChangeText={text => setEmail(text)} value={email} />
        </Options>
        <Options>
          <Label>Idade</Label>
          <InputText onChangeText={text => setIdade(text)} value={idade} />
        </Options>
        <Options>
          <Label>Theme dark</Label>
          <CheckBox checked={themeDark} onPress={() => setThemeDark(!themeDark)} />
        </Options>
        <Options>
          <Label>Receber Notificação</Label>
          <CheckBox checked={receberNotificacao} onPress={() => setReceberNotificacao(!receberNotificacao)} />
        </Options>
      </ContainerOptions>
      <View>
        <TouchableOpacity
          onPress={handleButtonPress}
          style={{
            backgroundColor: 'blue',
            padding: 10,
            borderRadius: 5,
          }}
        >
          <Text style={{ color: 'white', textAlign: 'center' }}>Salvar Configurações</Text>
        </TouchableOpacity>

      <TouchableOpacity
          onPress={handleButtonPressMostrar}
          style={{
            backgroundColor: 'blue',
            padding: 10,
            borderRadius: 5,
          }}
        >
          <Text style={{ color: 'white', textAlign: 'center' }}>Mostrar Configurações salvas</Text>
        </TouchableOpacity>
      </View>
    </Container>
  );
}
