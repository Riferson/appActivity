import React, { useState,useEffect } from "react";
import {Container,Title,ContainerImagens,ContainerCamera,ScrollViewImagens,ContainerImg,Img} from './styled';
import { Camera,CameraType } from "expo-camera";
import { TouchableOpacity,Text } from "react-native";
import { useNavigation } from "@react-navigation/native";

export default function Galeria(){
    const navigation = useNavigation();
     function handleCameraOpen(){
        navigation.navigate('camera');
     }

    return(
    <Container>
        <Title>Galeria</Title>
        <ContainerImagens>
            <ScrollViewImagens>
                <ContainerImg>
                   <Img source={{uri:'https://edge.mwallpapers.com/photos/celebrities/aesthetic/my-wallpaper-for-at-least-4-years-android-iphone-hd-wallpaper-background-downloadhd-wallpapers-desktop-background-android-iphone-1080p-4k-yzjhz.jpg'}}/> 
                   <Img source={{uri:'https://i.pinimg.com/736x/0b/cb/30/0bcb30c4f45163de731be4fcdbf59755.jpg'}}/> 
                   <Img source={{uri:'https://marketplace.canva.com/EAFUDhAHQMY/2/0/1600w/canva-blue-night-girl-cartoon-desktop-wallpaper-pGxnzsOWyrE.jpg'}}/> 
                   <Img source={{uri:'https://images6.alphacoders.com/133/1331137.png'}}/> 
                   <Img source={{uri:'https://dlcdnrog.asus.com/rog/media/1637784966993.webp'}}/> 
                   <Img source={{uri:'https://images8.alphacoders.com/133/1330234.png'}}/> 
                   <Img source={{uri:'https://loveshayariimages.in/wp-content/uploads/2022/07/cute-rose-gold-and-black-wallpaper.jpg'}}/> 
                   <Img source={{uri:'https://cdn.icon-icons.com/icons2/2440/PNG/512/gallery_icon_148533.png'}}/> 
                   <Img source={{uri:'https://cdn.icon-icons.com/icons2/2440/PNG/512/gallery_icon_148533.png'}}/> 
                   <Img source={{uri:'https://cdn.icon-icons.com/icons2/2440/PNG/512/gallery_icon_148533.png'}}/> 
                   <Img source={{uri:'https://cdn.icon-icons.com/icons2/2440/PNG/512/gallery_icon_148533.png'}}/> 
                   <Img source={{uri:'https://cdn.icon-icons.com/icons2/2440/PNG/512/gallery_icon_148533.png'}}/> 
                </ContainerImg>
            </ScrollViewImagens>
        </ContainerImagens>
        <ContainerCamera>
            <TouchableOpacity  onPress={handleCameraOpen}><Text>Camera</Text></TouchableOpacity>
        </ContainerCamera>
    </Container>
    );
}