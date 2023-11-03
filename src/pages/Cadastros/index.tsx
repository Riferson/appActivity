import React, { useEffect, useState } from "react";
import { Modal, BackHandler } from 'react-native';
import BackButton from "../../components/BackButton";
import { ContainerProj, Button, Container, ContainerTitle, Title, SubTitle, ContainerList, ContainerOptions, ButtonCadastrar, Text, TextButtom, ScrollViewPessoas, ContainerCard } from './styled';
import { ContainerModal, ContainerTitleModal, TitleModal, ContainerFormularioModal, ContainerInputModal, LabelModal, InputTextModal, ContainerSubmiteModal, SubmiteModal, TextModal } from './styledModal';
import CloseButton from "../../components/CloseButton";
import RadioButtonGroup from "../../components/RadioButtonSelect";
import Pessoas from "../SQLite/Pessoas";
import { Alert } from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import { useTheme } from "styled-components/native";
import { useNavigation } from "@react-navigation/native";

interface dataProps {
    Id?: number;
    nome?: string;
    email?: string;
    sexo?: string;
    date?: string;
    telefone?: string;
};

export default function Cadastros() {
    const [modalVisible, setModalVisible] = useState(false);
    const [nome, setNome] = useState('');
    const [Id, setID] = useState('');
    const [email, setEmail] = useState('');
    const [date, setDate] = useState('');
    const [sexo, setSexo] = useState('');
    const [telefone, setTelefone] = useState('');
    const [data, setData] = useState<dataProps[]>([]);
    const { colors } = useTheme();
    const dataSexo = [{ Label: 'Masculino', Value: 'masculino' }, { Label: 'Feminino', Value: 'feminino' }];
    const navigation = useNavigation();

    const handleUpdatePessoa = (updatedPessoa) => {
        // Encontre o índice da pessoa na lista e atualize-a
        const updatedIndex = data.findIndex((item) => item.Id === updatedPessoa.Id);
        if (updatedIndex !== -1) {
            data[updatedIndex] = updatedPessoa;
            setData([...data]); // Atualize o estado da lista
        }
    };

    const handleDeletePessoa = (deletedId) => {
        // Atualize o estado da lista excluindo a pessoa com o ID correspondente
        setData(data.filter((item) => item.Id !== deletedId));
    };

    const openModal = () => {
        setModalVisible(true);
    };

    const closeModal = () => {
        LimparCampos();
        setModalVisible(false);
    };

    function handleChangeSexo(value: any) {
        setSexo(value);
    }

    function LimparCampos() {
        setNome('');
        setEmail('');
        setSexo('');
        setDate('');
        setTelefone('');
    }

    function handleSalvar() {
        if (nome.trim() === '' || date.trim() === '' || email.trim() === '' || sexo.trim() === '') {
            alert('Informe os campos obrigatórios Nome, Email e Nascimento e Sexo');
        } else {
            const temp = {
                nome: nome,
                email: email,
                sexo: sexo,
                date: date,
                telefone: telefone,
            };
            temp.nome = temp.nome.toString();
            temp.email = temp.email.toString();
            temp.sexo = temp.sexo.toString();
            temp.date = temp.date.toString();
            temp.telefone = temp.telefone.toString();
            Pessoas.create(temp)
                .then((Id) => {
                    setID(Id.toString()); // Defina o valor de Id como uma string
                    alert('Pessoa Cadastrada com Sucesso ID: ' + Id);
                    setData([...data, temp]);
                    closeModal();
                })
                .catch((err) => {
                    console.log(err);
                    Alert.alert('Erro ao salvar pessoa.');
                });
        }
    }

    useEffect(() => {
        if (!data || data.length === 0) {
            Pessoas.ConsultaDados()
                .then(people => {
                    setData(people);
                })
                .catch(error => {
                    console.error("Erro ao consultar os dados:", error);
                });
        }
    }, []);

    const formatToDDMMYYYY = (value: any) => {
        const numericValue = value.replace(/\D/g, '');

        if (numericValue.length > 2 && numericValue.length <= 4) {
            setDate(`${numericValue.slice(0, 2)}/${numericValue.slice(2)}`);
        } else if (numericValue.length > 4) {
            setDate(`${numericValue.slice(0, 2)}/${numericValue.slice(2, 4)}/${numericValue.slice(4, 8)}`);
        } else {
            setDate(numericValue);
        }
    };

    function clearData() {
        Pessoas.clearTable();
        setData([]);
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

    return (
        <Container>
            <ContainerTitle>
                <BackButton route={'home'} />

                <Title>Lista de Cadastros</Title>
                <ContainerProj onPress={handleExitApp}>
                    <FontAwesome name="sign-out" size={20} color={colors.colorTextSecondary} />
                </ContainerProj>
            </ContainerTitle>
            <ContainerList>
                <ScrollViewPessoas>
                    {data.length === 0 ? (<SubTitle>Nenhum cadastrado realizado ainda!</SubTitle>) :
                        (data.map((item, index) => (
                            <ContainerCard
                                key={item.Id}
                                onPress={() => {
                                    navigation.navigate('PessoaDetalhes', { pessoa: item, onUpdate: handleUpdatePessoa, onDelete: handleDeletePessoa, });
                                }}
                            >
                                <Text>id: {item.Id}</Text>
                                <Text>Nome: {item.nome}</Text>
                                <Text>E-Mail: {item.email}</Text>
                                <Text>Nascimento: {item.date}</Text>
                                <Text>Sexo: {item.sexo}</Text>
                                <Text>Telefone: {item.telefone}</Text>
                            </ContainerCard>
                        ))
                        )}
                </ScrollViewPessoas>
                <ButtonCadastrar onPress={openModal}><TextButtom>Nova Pessoa</TextButtom></ButtonCadastrar>
            </ContainerList>
            <ContainerOptions>
                <Button onPress={clearData}><TextModal>Limpar o banco</TextModal></Button>
                <Button onPress={async () => {
                    const isValid = await Pessoas.validationDb();
                    if (isValid) {
                        Pessoas.exportDb();
                    } else {
                        alert("Nenhum banco para exportar");
                    }
                }}>
                    <TextModal>Debug - Exportar banco</TextModal>
                </Button>
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
                        <ContainerInputModal>
                            <LabelModal>Nascimento:</LabelModal>
                            <InputTextModal
                                value={date}
                                onChangeText={(text: any) => formatToDDMMYYYY(text)}
                                placeholder="DD/MM/YYYY"
                                keyboardType="numeric"
                                maxLength={10} />
                        </ContainerInputModal>
                        <ContainerInputModal>
                            <LabelModal>E-Mail:</LabelModal>
                            <InputTextModal onChangeText={(text: any) => setEmail(text)} value={email} />
                        </ContainerInputModal>
                        <ContainerInputModal>
                            <LabelModal>Telefone:</LabelModal>
                            <InputTextModal onChangeText={(text: any) => setTelefone(text)} value={telefone} keyboardType="phone-pad" />
                        </ContainerInputModal>
                        <ContainerInputModal>
                            <LabelModal>Sexo:</LabelModal>
                            <RadioButtonGroup value={""} data={dataSexo} ActionReturn={handleChangeSexo} />

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
