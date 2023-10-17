import React from "react";
import { CheckBox } from "react-native-elements";
import {
  Container,
  Title,
  ContainerOptions,
  Options,
  Label,
  InputText,
} from "./styled";

export default function Preferencias() {
  return (
    <Container>
      <Title>Preferencias</Title>
      <ContainerOptions>
        <Options>
          <Label>Nome</Label>
          <InputText></InputText>
        </Options>
        <Options>
          <Label>Email</Label>
          <InputText></InputText>
        </Options>
        <Options>
          <Label>Idade</Label>
          <InputText></InputText>
        </Options>
        <Options>
          <Label>Theme dark</Label>
          <CheckBox />
        </Options>
        <Options>
          <Label>Receber Notificação</Label>
          <CheckBox />
        </Options>
      </ContainerOptions>
    </Container>
  );
}
