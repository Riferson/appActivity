import { useNavigation, useRoute } from '@react-navigation/native';
import { Alert } from 'react-native';
import { Container, ContainerTitle, Title, Label, InputText, View, ButtonContainer, ButtonText, PickerContainer, ContainerB } from '../TarefaDetalhes/styled';
import { useState } from 'react';
import BackButton from '../../components/BackButton';
import { Picker } from '@react-native-picker/picker';
import { Text } from './styled';
import { format } from 'date-fns';

export default function TarefaDetalhes() {
  const route = useRoute();
  const { tarefa } = route.params;

  const [nome, setNome] = useState(tarefa.title);
  const [id, setId] = useState(tarefa.id);
  const [status, setStatus] = useState(tarefa.status);
  const [dataCricao, setData] = useState(tarefa.created_at)

  const navigation = useNavigation();

  const handleSalvar = () => {
    if (nome.trim() === '' || status.trim() === '') {
      alert('Você não pode deixar nenhum campo vazios!');
  } else {
      const taskData = {
          title: nome,
          status: status,
      };

      console.log(process.env.IP)
      fetch(`http://${process.env.IP}/tasks/`+ id, {
          method: 'PUT',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(taskData),
      })
      .then(response => {
        if (response.status === 204) {
          return { success: true, message: 'Tarefa atualizada com sucesso.' };
        }
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        console.log('Resposta da API:', data);

        if (data.success) {
          alert('Tarefa Atualizada com Sucesso');
        } else {
          alert('Falha ao atualizar tarefa.');
        }
      })
          .catch(error => {
              console.error('Erro ao fazer a requisição:', error);
              Alert.alert('Erro ao salvar pessoa.');
          });
    }
    route.params.onUpdate();
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
            fetch(`http://${process.env.IP}/tasks/${id}`, {
            method: 'DELETE',
            headers: {
              'Content-Type': 'application/json',
            },
          })
            .then(response => {
              if (response.ok) {
                console.log('Tarefa excluída com sucesso!');
                navigation.navigate('cadastros2');
              } else {
                console.error('Erro ao fazer a requisição DELETE:', response.status);
                Alert.alert('Erro ao excluir a tarefa.');
              }
            })
            .catch(error => {
              console.error('Erro ao fazer a requisição DELETE:', error);
              Alert.alert('Erro ao excluir a tarefa.');
            });
          },
        },
      ]
    );
    route.params.onUpdate();
  };

  return (
    <Container>
    <ContainerTitle>
        <BackButton route={'cadastros2'} />
        <Title>Informações da tarefa</Title>
      </ContainerTitle>

      <View>
        <Label>Id:</Label>
        <Text>{id}</Text>

        <Label>Nome:</Label>
        <InputText value={nome} onChangeText={setNome}/>

        <Label>Status:</Label>
      <PickerContainer>
      <Picker
      selectedValue={status}
        onValueChange={(itemValue, itemIndex) => setStatus(itemValue)}
      >
        <Picker.Item label="Pendente" value="Pendente" />
        <Picker.Item label="Em Andamento" value="Em Andamento" />
        <Picker.Item label="Concluída" value="Concluída" />
      </Picker>
      </PickerContainer>

        <Label>Data de Criação</Label>
        <Text>{format(new Date(dataCricao), 'dd/MM/yyyy HH:mm:ss')}</Text>

        <ContainerB>
          <ButtonContainer onPress={handleSalvar}><ButtonText>Atualizar</ButtonText></ButtonContainer>
          <ButtonContainer onPress={handleExcluir}><ButtonText>Excluir</ButtonText></ButtonContainer>
        </ContainerB>
      </View>
    </Container>
  );
}
