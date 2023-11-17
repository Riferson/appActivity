import React, { useEffect, useState } from "react";
import { Modal, BackHandler } from 'react-native';
import BackButton from "../../components/BackButton";
import { ContainerProj, Button, Container, ContainerTitle, Title, SubTitle, ContainerList, ContainerOptions, ButtonCadastrar, Text, TextButtom, ScrollViewPessoas, ContainerCard } from './styled';
import { ContainerModal, ContainerTitleModal, TitleModal, ContainerFormularioModal, ContainerInputModal, LabelModal, InputTextModal, ContainerSubmiteModal, SubmiteModal, TextModal } from './styledModal';
import CloseButton from "../../components/CloseButton";
import { format } from 'date-fns';
import { Alert } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useTheme } from "styled-components/native";
import { useNavigation } from "@react-navigation/native";

interface dataProps {
    id?: number;
    title?: string;
    status?: string;
    created_at?: string;
};

export default function Cadastros() {
    const [modalVisible, setModalVisible] = useState(false);
    const [nome, setNome] = useState('');
    const [data, setData] = useState<dataProps[]>([]);
    const { colors } = useTheme();
    const navigation = useNavigation();

    const openModal = () => {
        setModalVisible(true);
    };

    const closeModal = () => {
        LimparCampos();
        setModalVisible(false);
    };

    function LimparCampos() {
        setNome('');
    }

    const handleSalvar = () => {
        if (nome.trim() === '') {
            alert('Informe o nome da tarefa!');
        } else {
            const taskData = {
                title: nome,
            };
    
            console.log(process.env.IP)
            fetch(`http://${process.env.IP}/tasks`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(taskData),
            })
                .then(response => response.json())
                .then(data => {
                    console.log('Resposta da API:', data);

                    closeModal();
                    alert('Tarefa Cadastrada com Sucesso ID: ' + data.insertId.toString());
                })
                .catch(error => {
                    console.error('Erro ao fazer a requisição:', error);
                    Alert.alert('Erro ao salvar pessoa.');
                });
        }
    };


 const fetchData = async () => {
            try {
                const response = await fetch(`http://${process.env.IP}/tasks`);
                const result = await response.json();

                if (Array.isArray(result)) {
                    setData(result);
                } else {
                    console.error("Resposta da API não é um array:", result);
                }
            } catch (error) {
                console.error("Erro ao fazer a requisição GET:", error);
            }
        };

        fetchData();

    useEffect(() => {
        fetchData();
    }, []);

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
                        BackHandler.exitApp(); 
                    },
                },
            ],
            { cancelable: false }
        );
    };

    return (
        <Container>
            <ContainerTitle>
                <BackButton route={'home'} />

                <Title>Lista de Tarefas</Title>
                <ContainerProj onPress={handleExitApp}>
                    <FontAwesome name="sign-out" size={20} color={colors.colorTextSecondary} />
                </ContainerProj>
            </ContainerTitle>
            <ContainerList>
                <ScrollViewPessoas>
                    {data.length === 0 ? (<SubTitle>Nenhuma tarefa cadastrada ainda!</SubTitle>) :
                        (data.map((item, index) => (
                            <ContainerCard
                                key={item.Id}
                                onPress={() => {
                                    navigation.navigate('TarefaDetalhes', {tarefa: item, onUpdate: fetchData});
                                }}
                            >
                                <Text>id: {item.id}</Text>
                                <Text>Nome da Tarefa: {item.title}</Text>
                                <Text>Status: {item.status}</Text>
                                <Text>Data de Criação: {format(new Date(item.created_at), 'dd/MM/yyyy HH:mm:ss')}</Text>
                            </ContainerCard>
                        ))
                        )}
                </ScrollViewPessoas>
                
            </ContainerList>
            <ContainerOptions>
            <ButtonCadastrar onPress={openModal}><TextButtom>Nova Tarefa</TextButtom></ButtonCadastrar>
            </ContainerOptions>

            <Modal animationType="slide" transparent={true} visible={modalVisible}>
                <ContainerTitleModal>
                    <CloseButton action={closeModal} />
                    <TitleModal>Cadastrar Nova Pessoa</TitleModal>
                </ContainerTitleModal>
                <ContainerModal>
                    <ContainerFormularioModal>
                        <ContainerInputModal>
                            <LabelModal>Nome:</LabelModal>
                            <InputTextModal onChangeText={(text: any) => setNome(text)} value={nome} />
                        </ContainerInputModal>
                    </ContainerFormularioModal>
                    <ContainerSubmiteModal>
                        <SubmiteModal onPress={handleSalvar}><TextModal>Salvar</TextModal></SubmiteModal>
                    </ContainerSubmiteModal>
                </ContainerModal>
            </Modal>
        </Container>
    );
}
