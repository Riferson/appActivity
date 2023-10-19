import AsyncStorage from '@react-native-async-storage/async-storage';
export const lightThemeStyles = {
    backgroundColor: 'white',
    color: 'black',
};

export const darkThemeStyles = {
    backgroundColor: 'black',
    color: 'white',
};

export const loadThemePreference = async () => {
    try {
        const themeDarkSalvo = await AsyncStorage.getItem('themeDark');
        return themeDarkSalvo === 'true' ? darkThemeStyles : lightThemeStyles;
    } catch (error) {
        console.error('Erro ao recuperar o tema: ', error);
        return lightThemeStyles; // Pode definir um tema padrão caso haja um erro
    }
}