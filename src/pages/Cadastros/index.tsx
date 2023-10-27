import React, { useEffect, useState } from "react";
import { View, TouchableOpacity, Modal, StyleSheet } from 'react-native';
import BackButton from "../../components/BackButton";
import { Container, ContainerTitle, Title, ContainerList, ContainerCadastro, ButtonCadastrar, Text, TextButtom, ScrollViewPessoas, ContainerCard } from './styled';
import { ContainerModal, ContainerTitleModal, TitleModal, ContainerFormularioModal, ContainerInputModal, LabelModal, InputTextModal, ContainerSubmiteModal, SubmiteModal, TextModal } from './styledModal';
import CloseButton from "../../components/CloseButton";
import RadioButtonGroup from "../../components/RadioButtonSelect";
import Pessoas from "../SQLite/Pessoas";
import { Alert } from "react-native";

interface dataProps {
    id?: string;
    nome?: string;
    email?: string;
    sexo?: string;
    date?: string;
};

export default function Cadastros() {
    const [modalVisible, setModalVisible] = useState(false);
    const [nome, setNome] = useState('');
    const [id, setID] = useState('');
    const [email, setEmail] = useState('');
    const [date, setDate] = useState('');
    const [sexo, setSexo] = useState('');
    const [data, setData] = useState<dataProps[]>([]);

    const dataSexo = [{ Label: 'Masculino', Value: 'masculino' }, { Label: 'Feminino', Value: 'feminino' }];

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
        setID('');
        setEmail('');
        setSexo('');
        setDate('');
    }

    function handleSalvar() {
        if (nome.trim() === '' || date.trim() === '' || email.trim() === '' || sexo.trim() === '') {
            alert('Informe os campos obrigatórios Nome, Email e Nascimento e Sexo ');
          } else {
            const temp = {
                id: id,
                nome: nome,
                email: email,
                sexo: sexo,
                date: date,
            };
    
            temp.nome = temp.nome.toString();
            temp.email = temp.email.toString();
            temp.sexo = temp.sexo.toString();
            temp.date = temp.date.toString();
    
            Pessoas.create(temp)
                .then((id) => {
                    alert('Pessoa Cadastrada com Sucesso ID: ' + id);
                    setData([...data, temp]);
                    closeModal();
                })
                .catch((err) => {
                    console.log(err);
                    Alert.alert('Erro ao salvar pessoa.');
                });

                Pessoas.ConsultaDados()
                .then(people => {
                  people.forEach(person => {
                    console.log(person);
                  });
                })
                .catch(error => {
                  console.error("Erro ao consultar os dados:", error);
                });
          }
    }

    useEffect(() => {
        console.log('nome', nome);
        console.log('id', id);
        console.log('email', email);
        console.log('date', date);
        console.log('sexo', sexo);
    }, [data]);

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

    return (
        <Container>
            <ContainerTitle>
                <BackButton route={'home'} />
                <Title>Lista de Cadastros</Title>
            </ContainerTitle>
            <ContainerList>
                <ButtonCadastrar onPress={openModal}><TextButtom>Nova Pessoa</TextButtom></ButtonCadastrar>
                <SubmiteModal onPress={Pessoas.clearTable}><TextModal>Limpar o banco</TextModal></SubmiteModal>
            </ContainerList>
            <ContainerCadastro>
            <SubmiteModal onPress={async () => {
            const isValid = await Pessoas.validationDb();
            if (isValid) {
                Pessoas.exportDb();
            } else {
                alert("Nenhum banco para exportar");
            }
            }}>
            <TextModal>Debug - Exportar banco</TextModal>
            </SubmiteModal>
                
            </ContainerCadastro>

            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
            >
                <ContainerModal>
                    <ContainerTitleModal>
                        <CloseButton action={closeModal} />
                        <TitleModal>Cadastrar Nova Pessoa</TitleModal>
                    </ContainerTitleModal>
                    <ContainerFormularioModal>
                        <ContainerInputModal>
                            <LabelModal>Id:</LabelModal>
                            <InputTextModal onChangeText={(text: any) => setID(text)} value={id} />
                        </ContainerInputModal>
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
                            <LabelModal>Sexo:</LabelModal>
                            <RadioButtonGroup data={dataSexo} ActionReturn={handleChangeSexo} />
 
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
