import { View, Text, StyleSheet, Image, TouchableWithoutFeedback, Keyboard, ScrollView } from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { responsiveFontSize, responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions';
import { SafeAreaView } from 'react-native-safe-area-context';
import React, { useState } from 'react'
import TextInputComponent from '../../components/common/inputs/TextInputComponent'
import { inputsHandlerParams } from '../../interfaces/components/inputs'
import { Styles } from '../../../assets/styles/GlobalStyles';
import BackBtn from '../../components/common/buttons/BackBtn';
import GoogleBtn from '../../components/common/buttons/GoogleBtn';
import TermsCondition from '../../components/common/Terms&Condition';
import BtnPrimary from '../../components/common/buttons/BtnPrimary';
import { useDispatch } from 'react-redux';
import { updateUserData } from '../../redux/reducers/user';
import { UpdateCredDetails } from '../../redux/reducers/credential';
import { useNavigation } from '@react-navigation/native';


const initialState = {
    email: '',
    password: ''
}


const SignUp = () => {
    const [inputs, setInputs] = useState(initialState);
    const [isActive, setIsActive] = useState(false);
    const dispatch = useDispatch();
    const navigation = useNavigation();

    const handleChange = ({ value, id }: inputsHandlerParams) => {
        setInputs((oldState) => {
            return {
                ...oldState,
                [id]: value,
            }
        })
        validation();
    }

    const validation = () => {
        const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        let state: boolean;
        if(inputs.email === ''){
            state = false;
        }else if(!regex.test(inputs.email)) {
            state = false;
        }else if(inputs.password === '' || inputs.password.length < 5){
            state = false;
        }else{
            state = true;
        }
        setIsActive(state);
    };

    const handleSignUp = () => {
        dispatch(UpdateCredDetails(inputs));
        setInputs(initialState);
        navigation.reset({
            index: 0,
            routes: [{name: 'Login' as never}]
        })
    }


    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <SafeAreaView style={{backgroundColor: 'white'}}>
                <ScrollView>
                    <View>
                        <BackBtn />
                    </View>
                    <View>
                        <View style={style.imgContainer}>
                            <Image
                                source={require('../../../assets/images/Logo.png')}
                                style={{ height: '100%', width: '100%' }}
                                resizeMode='contain'
                            />
                        </View>
                        <View style={style.container}>
                            <Text style={style.primaryText} >Let's get started !</Text>
                            {/* <View style={[style.mt_2]}>
                                <View style={style.socialBtnContainer}>
                                  <GoogleBtn label='Google' type='google' />
                                </View>
                                <View style={style.socialBtnContainer}>
                                  <GoogleBtn label='Facebook' type='facebook' />
                                </View>
                            </View>
                            <Text style={style.hintText}>Or sign up with email</Text> */}
                            <View>
                                <TextInputComponent
                                    label='Email address'
                                    id='email'
                                    value={inputs.email}
                                    handleChange={handleChange}
                                    subText=''
                                />
                                <TextInputComponent
                                    label='Your Password'
                                    id='password'
                                    value={inputs.password}
                                    handleChange={handleChange}
                                    subText="Make sure your password is five or more characters long"
                                />
                                <TermsCondition />
                                <View style={{marginTop: responsiveScreenHeight(2.8)}}>
                                  <BtnPrimary label='Next' isActive={isActive} handlePress={handleSignUp} />
                                </View>
                               
                            </View>

                        </View>
                    </View>
                </ScrollView>
            </SafeAreaView>
        </TouchableWithoutFeedback>
    )
}

export default SignUp;

const style = StyleSheet.create({
    imgContainer: {
        width: responsiveScreenWidth(50),
        height: responsiveScreenHeight(23),
        marginBottom: responsiveScreenHeight(.3),
        alignSelf:'center'
    },
    container: {
        paddingHorizontal: responsiveScreenWidth(2.5)
    },
    primaryText: {
        fontFamily: 'NunitoSans-Bold',
        fontSize: responsiveFontSize(4),
        marginBottom: responsiveScreenHeight(7)
    },
    mt_2: {
        marginTop: responsiveScreenHeight(1),
        flexDirection: 'row',
        alignItems: 'center',

    },
    hintText: {
        fontFamily: 'NunitoSans-Regular',
        color: '#8391A1',
        fontSize: responsiveFontSize(2),
        textAlign: 'center',
        marginVertical: responsiveScreenHeight(1.3)
    },
    socialBtnContainer: {
        width: '50%',
        paddingHorizontal: responsiveScreenWidth(1),
        paddingVertical: responsiveScreenHeight(1),
    }
})