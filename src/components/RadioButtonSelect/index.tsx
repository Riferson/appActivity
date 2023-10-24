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

}


export default function RadioButtonGroup({data,ActionReturn}:Props) {
    const [checked, setChecked] = useState('opcao1');
  
    function handleChangeValue(value:any){
        setChecked(value);
        ActionReturn(value)
    }

    return (
      <Container>
        <RadioButton.Group onValueChange={(value) =>handleChangeValue(value) } value={checked}>
            <ContentContainer>
                {data && data.map((item,index)=>(
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
  