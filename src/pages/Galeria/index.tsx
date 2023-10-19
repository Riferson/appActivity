import {Container,Title,ContainerImagens,ContainerCamera,ScrollViewImagens,ContainerImg,Img,ContainerStyleImg,ContainerHead} from './styled';
import React, { useState,useEffect } from "react";
import { TouchableOpacity,Text, View,Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useDataContext } from '../../Context/DataContext';
import { FontAwesome } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons'; 
import Modal from 'react-native-modal';
import { lightThemeStyles, loadThemePreference } from '../Theme/theme';
export default function Galeria(){
    const { objetos } = useDataContext(); 
    const [isModalVisible, setModalVisible] = useState(false);
    const [objetoClicado, setObjetoClicado] = useState(null);
    const [currentTheme, setCurrentTheme] = useState(lightThemeStyles);

    const navigation = useNavigation();
     function handleCameraOpen(){
        navigation.navigate('camera');
     }

     const abrirModal = (objeto:any) => {
        setObjetoClicado(objeto);
        setModalVisible(true);
      };

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

    return(
    <Container style={currentTheme}>
        <ContainerHead>
            <TouchableOpacity onPress={()=>{navigation.navigate('home');}}>
                <Ionicons name="arrow-back" size={44} style={currentTheme} />
            </TouchableOpacity>
        <Title style={currentTheme}>Galeria</Title>

        </ContainerHead>
        <ContainerImagens>
            <ScrollViewImagens>
                <ContainerImg>
                    { objetos && objetos.length>0? (objetos.map((objeto, index) => (
                        <TouchableOpacity onPress={() => abrirModal(objeto)} key={index}>
                            <Img source={{ uri: objeto.uri }} />
                         </TouchableOpacity>
                    ))) : (<Text style={currentTheme}>Nenhum imagem disponível.</Text>)}
 
                </ContainerImg>
            </ScrollViewImagens>
        </ContainerImagens>
        <ContainerCamera>
            <TouchableOpacity  onPress={handleCameraOpen}><FontAwesome name="camera-retro" size={42} style={currentTheme} /></TouchableOpacity>
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
          <Text style={currentTheme}>Fechar</Text>
        </TouchableOpacity>
        </>
            
          ) : (
            <Text style={currentTheme}>Imagem não disponível</Text>
            
          )}
        
      </View>
    </Modal>
    </Container>
    );
}