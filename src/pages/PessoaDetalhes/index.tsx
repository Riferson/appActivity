import { useNavigation, useRoute } from '@react-navigation/native';
import { Alert } from 'react-native';
import { Container, ContainerTitle, Title, Label, InputText, View, ButtonContainer, ButtonText } from '../PessoaDetalhes/styled';
import RadioButtonGroup from "../../components/RadioButtonSelect";
import { useState } from 'react';
import Pessoas from '../SQLite/Pessoas';
import BackButton from '../../components/BackButton';

export default function PessoaDetalhes() {
  const route = useRoute();
  const { pessoa } = route.params;
  const dataSexo = [{ Label: 'Masculino', Value: 'masculino' }, { Label: 'Feminino', Value: 'feminino' }];

  const [nome, setNome] = useState(pessoa.nome);
  const [email, setEmail] = useState(pessoa.email);
  const [date, setDate] = useState(pessoa.date);
  const [sexo, setSexo] = useState(pessoa.sexo);
  const [id, setId] = useState(pessoa.Id);
  const [telefone, setTelefone] = useState(pessoa.telefone);

  const navigation = useNavigation();

  const handleSalvar = () => {
    Pessoas.update(pessoa.Id, { nome, email, sexo, date }).then(() => {
      const updatedPessoa = { ...pessoa, nome, email, sexo, date };
      route.params.onUpdate(updatedPessoa);
      Alert.alert('Confirmação', 'Pessoa atualizada com sucesso!');
    });
  };

  const handleExcluir = () => {
    Alert.alert(
      'Confirmação',
      'Tem certeza de que deseja excluir esta pessoa?',
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Excluir',
          onPress: () => {
            Pessoas.deletar(pessoa.Id).then(() => {
              route.params.onDelete(pessoa.Id);
              navigation.goBack();
              Alert.alert('Confirmação', 'Pessoa excluída com sucesso!');
            });
          },
        },
      ]
    );
  };

  return (
    <Container>
    <ContainerTitle>
        <BackButton route={'cadastros'} />
        <Title>Informações do Cadastro</Title>
      </ContainerTitle>

      <View>
        <Label>Id:</Label>
        <InputText value={id.toString()} onChangeText={(text) => setId(text)} editable={false}/>

        <Label>Nome:</Label>
        <InputText value={nome} onChangeText={setNome}/>

        <Label>Email:</Label>
        <InputText value={email} onChangeText={setEmail}/>
  
        <Label>Data de Nascimento:</Label>
        <InputText value={date} onChangeText={setDate}/>

        <Label>Telefone:</Label>
        <InputText value={telefone} onChangeText={setTelefone} keyboardType="phone-pad"/>

        <RadioButtonGroup value={sexo} data={dataSexo} ActionReturn={setSexo} />

        <ButtonContainer onPress={handleSalvar}><ButtonText>Atualizar</ButtonText></ButtonContainer>
        <ButtonContainer onPress={handleExcluir}><ButtonText>Excluir</ButtonText></ButtonContainer>
      </View>
    </Container>
  );
}
