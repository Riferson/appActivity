import {Container,Title,ContainerImagens,ContainerCamera,ScrollViewImagens,ContainerImg,Img,ContainerStyleImg,ContainerHead} from './styled';
import React, { useState,useEffect } from "react";
import { TouchableOpacity,Text, View,Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useDataContext } from '../../Context/DataContext';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons'; 
import Modal from 'react-native-modal';
export default function Galeria(){
    const { objetos } = useDataContext(); 
    const [isModalVisible, setModalVisible] = useState(false);
    const [objetoClicado, setObjetoClicado] = useState(null);
    const navigation = useNavigation();
     function handleCameraOpen(){
        navigation.navigate('camera');
     }

     const abrirModal = (objeto:any) => {
        setObjetoClicado(objeto);
        setModalVisible(true);
      };

    return(
    <Container>
        <ContainerHead>
            <TouchableOpacity onPress={()=>{navigation.navigate('home');}}>
                <Ionicons name="arrow-back" size={44} color="black" />
            </TouchableOpacity>
        <Title>Galeria</Title>

        </ContainerHead>
        <ContainerImagens>
            <ScrollViewImagens>
                <ContainerImg>
                    { objetos && objetos.length>0? (objetos.map((objeto, index) => (
                        <TouchableOpacity onPress={() => abrirModal(objeto)} key={index}>
                            <Img source={{ uri: objeto.uri }} />
                         </TouchableOpacity>
                    ))) : (<Text>Nenhum imagem disponível.</Text>)}
 
                </ContainerImg>
            </ScrollViewImagens>
        </ContainerImagens>
        <ContainerCamera>
            <TouchableOpacity  onPress={handleCameraOpen}><FontAwesome name="camera-retro" size={42} color="black" /></TouchableOpacity>
        </ContainerCamera>
        <Modal isVisible={isModalVisible} backdropColor="black">
      <View>
      {objetoClicado ? (
        <>
            <Image
              source={{ uri: objetoClicado.uri }}
              style={{ width: '100%', height: '90%' }}
            />
            <TouchableOpacity onPress={() => setModalVisible(false)}>
          <Text>Fechar</Text>
        </TouchableOpacity>
        </>
            
          ) : (
            <Text>Imagem não disponível</Text>
            
          )}
        
      </View>
    </Modal>
    </Container>
    );
}