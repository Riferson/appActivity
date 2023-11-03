import React, { useState } from 'react';
import { View } from 'react-native';
import { RadioButton, Text } from 'react-native-paper';
import {Container,ContainerCard,Label,ContentContainer} from './styled';

interface Props{
    data:{
        Label:string;
        Value:string;
    }[];
    ActionReturn:(value: any)=>void;
    value: string;
}


export default function RadioButtonGroup({data,ActionReturn, value}:Props) {
    
    const [checked, setChecked] = useState(value);
  
    function handleChangeValue(value:any){
        setChecked(value);
        ActionReturn(value)
    }

    return (
        <Container>
          <RadioButton.Group onValueChange={(value) => handleChangeValue(value)} value={checked}>
            <ContentContainer>
              {data &&
                data.map((item, index) => (
                  <ContainerCard key={index}>
                    <RadioButton.Android value={item.Value} />
                    <Label>{item.Label}</Label>
                  </ContainerCard>
                ))}
            </ContentContainer>
          </RadioButton.Group>
        </Container>
      );
  }
  