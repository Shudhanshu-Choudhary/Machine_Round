import { StyleSheet, Text, Image, View, ImageBackground, Pressable } from 'react-native'
import React from 'react'
import { responsiveFontSize, responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Avatar, Button } from 'react-native-paper';
import useNavigate from '../../hooks/navigation/navigationHook';
import { moderateScale, scale } from 'react-native-size-matters';

const OnBoardingPage = () => {
    const NavigateTo = useNavigate();

    return (
        
            <SafeAreaView style={[styles.container]}>
                <View style={styles.headerContainer}>
                    <View style={styles.content}>
                        <Image resizeMode='contain'  style={{height:moderateScale(200),width:moderateScale(200)}} source={require('../../../assets/images/Logo.png')} />
                    </View>
                </View>
                <Image style={{height:scale(300),width:"100%",position:'absolute',marginTop:moderateScale(200)}} source={require('../../../assets/images/Mobile.png')}/>
                <View style={styles.mainBody}>

                    <View style={styles.btnContainer}>
                        <Button
                            mode="contained"
                            buttonColor={'#34b8ed'}
                            style={styles.btn}
                            onPress={() => NavigateTo('Signup')}
                        >
                            Get Started
                        </Button>
                    </View>
                    <View style={styles.footerContainer}>
                        <Text style={styles.footerTextSuggestion}>{`Already Signup ? `}</Text>
                        <Pressable onPress={() => NavigateTo('Login')}>
                            <Text style={styles.navText}>Sign In</Text>
                        </Pressable>
                    </View>
                </View>
            </SafeAreaView>
    )
}

export default OnBoardingPage

const styles = StyleSheet.create({
    flex_1: {
        flex: 1
    },
    container: {
        flex: 1,
    },
    headerContainer: {
        height: responsiveScreenHeight(10),
        justifyContent: 'center',
        alignItems: 'center',
        marginTop:moderateScale(30)
    },
    textLogo: {
        fontFamily: 'DancingFont-SemiBold',
        fontSize: responsiveFontSize(4),
        color: '#34b8ed',
        marginLeft: responsiveScreenWidth(2)
    },
    content: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:moderateScale(60),
    },
    mainBody: {
        position: 'absolute',
        bottom: responsiveScreenHeight(1),
        width: '100%'
    },
    primaryText: {
        fontFamily: 'NunitoSans-Bold',
        fontSize: responsiveFontSize(4.7),
        color: '#34b8ed',
        textAlign: 'center'
    },
    primaryTextContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
    },
    textContainer: {
        width: responsiveScreenWidth(80),
    },
    btn: {
        paddingVertical: responsiveScreenHeight(.6),
        width: responsiveScreenWidth(95),
    },
    btnContainer: {
        marginTop: responsiveScreenHeight(3),
        justifyContent: 'center',
        alignItems: 'center'
    },
    footerContainer: {
        marginTop: responsiveScreenHeight(3),
        flexDirection: 'row',
        justifyContent: 'center',
        marginBottom:moderateScale(20)
    },
    footerTextSuggestion: {
        fontSize: responsiveFontSize(2.1),
        color: '#34b8ed',
        fontFamily: 'NunitoSans-Regular',
    },
    navText: {
        color: '#34b8ed',
        fontSize: responsiveFontSize(2.1),
        fontFamily: 'NunitoSans-Regular',
    }
})