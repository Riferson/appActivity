import React from "react";
import { TouchableOpacity} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "styled-components/native";
import { useNavigation } from "@react-navigation/native";


interface Props{
    action:() => void;
}

export default function CloseButton({action}:Props){
  const { colors } = useTheme();
  const navigation = useNavigation();

    return(
        <>
        <TouchableOpacity onPress={action}>
                <Ionicons name="close" size={44}  color={colors.colorText}/>
        </TouchableOpacity>
        </>
    )
        
}