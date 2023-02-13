import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { responsiveFontSize, responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions'

interface props {
    label: string,
    type: string
}

const SocialLoginBtn: React.FC<props> = ({label, type}) => {
  return (
    <View style={styles.container}>
        <TouchableOpacity>
            <View style={styles.btnContainer}>
                <View style={styles.btnImageContainer}>
                    {
                       type === 'google' ?
                       <Image 
                        source={require(`../../../../assets/images/google.png`)}
                        style={{ height: '100%', width: '100%' }} 
                        resizeMode='contain' 
                       /> :
                       <FontAwesome name='facebook-official' style={styles.icon} color={'#1877f2'} />
                    }
                    
                </View>
                <View style={styles.btnTextContainer}>
                    <Text style={styles.btnText}>{label}</Text>
                </View>
            </View>
        </TouchableOpacity>
    </View>
  )
}

export default SocialLoginBtn

const styles = StyleSheet.create({
    container: {
        width: '100%',
        marginTop: responsiveScreenHeight(1),
        paddingVertical: responsiveScreenHeight(1),
        paddingHorizontal: responsiveScreenWidth(1),
        justifyContent: 'center',
        alignItems: 'center'
     },
     btnContainer: {
        width: '100%',
        borderRadius: responsiveScreenWidth(3),
        backgroundColor: '#E0E0E0',
        paddingHorizontal: responsiveScreenWidth(3),
        paddingVertical: responsiveScreenHeight(.5),
        flexDirection: 'row',
        alignItems: 'center'
     },
     btnImageContainer: {
        width: responsiveScreenWidth(8),
        height: responsiveScreenHeight(5),
        justifyContent: 'center',
        alignItems: 'center'
     },
     btnTextContainer: {
        flex: 1,
        justifyContent: 'center',
        paddingStart: responsiveScreenWidth(3)
    },
    btnText: {
        fontFamily: 'NunitoSans-Bold',
        fontSize: responsiveFontSize(2),

    },
    icon: {
        fontSize: responsiveFontSize(3)
    }
})