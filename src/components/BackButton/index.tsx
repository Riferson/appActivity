import React from "react";
import { TouchableOpacity} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useTheme } from "styled-components/native";
import { useNavigation } from "@react-navigation/native";


interface Props{
    route:string;
}

export default function BackButton({route}:Props){
  const { colors } = useTheme();
  const navigation = useNavigation();

    return(
        <>
        <TouchableOpacity onPress={()=>{navigation.navigate(`${route}`)}} >
                <Ionicons name="arrow-back" size={44} color={colors.colorText}/>
        </TouchableOpacity>
        </>
    )
        
}