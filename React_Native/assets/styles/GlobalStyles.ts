import { StyleSheet } from "react-native"
import { responsiveScreenWidth } from "react-native-responsive-dimensions"
import { useFonts } from 'expo-font';

export const Styles = StyleSheet.create({
    container: {
        paddingHorizontal: responsiveScreenWidth(2)
    },
    textGrey: {
        textAlign: 'center',
        color: '#8391A1'
    },
})