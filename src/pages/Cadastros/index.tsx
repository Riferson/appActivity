import React ,{useEffect, useState} from "react";
import { View, TouchableOpacity, Modal, StyleSheet } from 'react-native';
import BackButton from "../../components/BackButton";
import {Container,ContainerTitle,Title,ContainerList,ContainerCadastro,ButtonCadastrar,Text,TextButtom,ScrollViewPessoas,ContainerCard} from './styled';
import {ContainerModal,ContainerTitleModal,TitleModal,ContainerFormularioModal,ContainerInputModal,LabelModal,InputTextModal,ContainerSubmiteModal,SubmiteModal,TextModal} from './styledModal';
import CloseButton from "../../components/CloseButton";
import RadioButtonGroup from "../../components/RadioButtonSelect";

interface dataProps{
        id?:string;
        nome?:string;
        email?:string;
        sexo?:string;
        date?:string;
};

export default function Cadastros(){
    const [modalVisible, setModalVisible] = useState(false);
    const [nome,setNome] = useState('');
    const [id,setID] = useState('');
    const [email,setEmail] = useState('');
    const [date,setDate] = useState('');
    const [sexo,setSexo] = useState('');
    const [data,setData] = useState<dataProps[]>([]);

    const dataSexo = [{Label:'Masculino',Value:'masculino'},{Label:'Feminino',Value:'feminino'},{Label:'Nao Especificar',Value:'naoespecificado'}]

  const openModal = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    LimparCampos();
    setModalVisible(false);
  };

  function handleChangeSexo(value:any){
    setSexo(value);
  }

  function LimparCampos(){
    setNome('');
    setID('');
    setEmail('');
    setSexo('');
    setDate('');
  }

  function handleSavar(){
    const temp = {
        id:id,
        nome:nome,
        email:email,
        sexo:sexo,
        date:date,
    };
    setData([...data,temp])
    console.log(data);
    closeModal();
  }

  useEffect(()=>{

    console.log('nome',nome);
    console.log('id',id);
    console.log('email',email);
    console.log('date',date);
    console.log('sexo',sexo);
  },[data])


  const formatToDDMMYYYY = (value:any) => {
    // Remove caracteres não numéricos da entrada
    const numericValue = value.replace(/\D/g, '');

    // Adiciona barras (/) conforme o usuário digita a data
    if (numericValue.length > 2 && numericValue.length <= 4) {
        setDate(`${numericValue.slice(0, 2)}/${numericValue.slice(2)}`);
    } else if (numericValue.length > 4) {
        setDate(`${numericValue.slice(0, 2)}/${numericValue.slice(2, 4)}/${numericValue.slice(4, 8)}`);
    } else {
        setDate(numericValue);
    }
  };
    return(
        <Container>
            <ContainerTitle>
            <BackButton route={'home'}/>
            <Title>Lista de Cadastros</Title>
            </ContainerTitle>
            <ContainerList>
                <ScrollViewPessoas>
                    {data && data.length > 0 ? (data.map((objeto,index)=>(
                        <ContainerCard>
                            <Text>Id:{objeto.id}</Text>
                            <Text>Nome:{objeto.nome}</Text>
                            <Text>E-Mail:{objeto.email}</Text>
                            <Text>Nascimento:{objeto.date}</Text>
                            <Text>sexo:{objeto.sexo}</Text>
                        </ContainerCard>
                    ))) : <></>} 
                </ScrollViewPessoas>
            </ContainerList>
            <ContainerCadastro>
                <ButtonCadastrar onPress={openModal}><TextButtom>Nova Pessoa</TextButtom></ButtonCadastrar>
            </ContainerCadastro>

            <Modal
                animationType="slide" // Pode ajustar a animação do modal conforme necessário
                transparent={true}
                visible={modalVisible}
            >
                <ContainerModal>
                    <ContainerTitleModal>
                        <CloseButton action={closeModal}/>
                        <TitleModal>Cadastrar Nova Pessoa</TitleModal>
                    </ContainerTitleModal>
                    <ContainerFormularioModal>
                        <ContainerInputModal>
                            <LabelModal>Id:</LabelModal>
                            <InputTextModal onChangeText={(text:any)=>setID(text)} value={id}/>
                        </ContainerInputModal>
                        <ContainerInputModal>
                            <LabelModal>Nome:</LabelModal>
                            <InputTextModal onChangeText={(text:any)=>setNome(text)} value={nome}/>
                        </ContainerInputModal>
                        <ContainerInputModal>
                            <LabelModal>Nascimento:</LabelModal>
                            <InputTextModal
                            value={date}
                            onChangeText={(text:any) => formatToDDMMYYYY(text)}
                            placeholder="DD/MM/YYYY"
                            keyboardType="numeric"
                            maxLength={10}/>
                        </ContainerInputModal>
                        <ContainerInputModal>
                            <LabelModal>E-Mail:</LabelModal>
                            <InputTextModal onChangeText={(text:any)=>setEmail(text)} value={email}/>
                        </ContainerInputModal>
                        <ContainerInputModal>
                            <LabelModal>Sexo:</LabelModal>
                            <RadioButtonGroup data={dataSexo} ActionReturn={handleChangeSexo}/>
                        </ContainerInputModal>
                    </ContainerFormularioModal>
                    <ContainerSubmiteModal>
                        <SubmiteModal onPress={handleSavar}><TextModal>Salvar</TextModal></SubmiteModal>
                    </ContainerSubmiteModal>
                </ContainerModal>
            </Modal>
        </Container>

    );
}