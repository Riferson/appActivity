import {
  Container,
  Title,
  ContainerImagens,
  ContainerCamera,
  ScrollViewImagens,
  ContainerImg,
  Img,
  ContainerHead,
  TinyText,
} from "./styled";
import React, { useState, useEffect } from "react";
import { TouchableOpacity, Text, View, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { useDataContext } from "../../Context/DataContext";
import { FontAwesome } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import Modal from "react-native-modal";
import { useTheme } from "styled-components/native";
import BackButton from "../../components/BackButton";

export default function Galeria() {
  const { objetos } = useDataContext();
  const [isModalVisible, setModalVisible] = useState(false);
  const [objetoClicado, setObjetoClicado] = useState(null);
  const { colors } = useTheme();

  const navigation = useNavigation();
  function handleCameraOpen() {
    navigation.navigate("camera");
  }

  const abrirModal = (objeto: any) => {
    setObjetoClicado(objeto);
    setModalVisible(true);
  };

  return (
    <Container>
      <ContainerHead>
      <BackButton route={'home'}/>
        <Title>Galeria</Title>
      </ContainerHead>
      <ContainerImagens>
        <ScrollViewImagens>
          <ContainerImg>
            {objetos && objetos.length > 0 ? (
              objetos.map((objeto, index) => (
                <TouchableOpacity
                  onPress={() => abrirModal(objeto)}
                  key={index}
                >
                  <Img source={{ uri: objeto.uri }} />
                </TouchableOpacity>
              ))
            ) : (
              <Title>Nenhum imagem disponível.</Title>
            )}
          </ContainerImg>
        </ScrollViewImagens>
      </ContainerImagens>
      <ContainerCamera>
        <TouchableOpacity onPress={handleCameraOpen}>
          <FontAwesome name="camera-retro" size={42} color={colors.colorText} />
        </TouchableOpacity>
      </ContainerCamera>
      <Modal isVisible={isModalVisible} backdropColor="black">
        <View>
          {objetoClicado ? (
            <>
              <Image
                source={{ uri: objetoClicado.uri }}
                style={{ width: "100%", height: "90%" }}
              />
              <TouchableOpacity onPress={() => setModalVisible(false)}>
                <TinyText>Fechar</TinyText>
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
