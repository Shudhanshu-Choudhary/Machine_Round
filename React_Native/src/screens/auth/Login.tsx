import { Alert, Keyboard, Pressable, StyleSheet, Text, TouchableWithoutFeedback, View } from 'react-native'
import React, { useState } from 'react'
import BackBtn from '../../components/common/buttons/BackBtn'
import { responsiveFontSize, responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions'
import TextInputComponent from '../../components/common/inputs/TextInputComponent';
import { inputsHandlerParams } from '../../interfaces/components/inputs';
import BtnPrimary from '../../components/common/buttons/BtnPrimary';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colorGrey, colorPrimary } from '../../../assets/styles/GlobalTheme';
import useNavigate from '../../hooks/navigation/navigationHook';
import { useDispatch, useSelector } from 'react-redux';
import { updateUserData } from '../../redux/reducers/user';

const initialState = {
    email: '',
    password: ''
}
const Login = () => {
    const [inputs, setInputs] = useState(initialState);
    const [isActive, setIsActive] = useState(false);
    const creds = useSelector((state: any) => state.creds);
    const dispatch = useDispatch();
    const NavigateTo = useNavigate();

    const handleChange = ({ value, id }: inputsHandlerParams) => {
        setInputs((oldState) => {
            return {
                ...oldState,
                [id]: value,
            }
        });
        validation();
    };

    const validation = () => {
        const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
        let state: boolean;
        if (inputs.email === '') {
            state = false;
        } else if (!regex.test(inputs.email)) {
            state = false;
        } else if (inputs.password === '' || inputs.password.length < 5) {
            state = false;
        } else {
            state = true;
        }
        setIsActive(state);
    }

    const handleLogin = () => {
        if(Object.keys(creds).length <= 0){
            Alert.alert('User not Found')
        }else {
            if(inputs.email === creds.email && inputs.password === creds.password){
                dispatch(updateUserData(true));
                setInputs(initialState);
            }else{
                Alert.alert('Invalid Credentials')
            }
        }
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
                <View style={{ flex: 1 }}>
                    <View style={style.header}>
                        <BackBtn />
                    </View>
                    <View style={style.container}>
                        <Text style={style.primaryText} >Welcome back!</Text>
                        <Text style={style.primaryText} >Glad to see you, Again!</Text>

                        <View style={style.mt_3}>
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
                            <View style={{ marginTop: responsiveScreenHeight(2) }}>
                                <BtnPrimary label='Login' isActive={isActive} handlePress={handleLogin} />
                            </View>


                            {/* <Text style={style.hintText}>Or sign In with email</Text>
                            <View style={[style.mt_2]}>
                                <View style={style.socialBtnContainer}>
                                    <SocialLoginBtn label='Google' type='google' />
                                </View>
                                <View style={style.socialBtnContainer}>
                                    <SocialLoginBtn label='Facebook' type='facebook' />
                                </View>
                            </View> */}

                        </View>
                        <View style={style.footerContainer}>
                            <Text style={style.footerTextSuggestion}>{`Don't have an account? `}</Text>
                            <Pressable onPress={() => NavigateTo('Signup')}>
                                <Text style={style.navText}>Sign up</Text>
                            </Pressable>
                        </View>
                    </View>
                </View>
            </SafeAreaView>
        </TouchableWithoutFeedback>
    )
}

export default Login

const style = StyleSheet.create({
    container: {
        flex: 1,
        position: 'relative',
        paddingHorizontal: responsiveScreenWidth(2.5),
    },
    primaryText: {
        fontFamily: 'NunitoSans-Bold',
        fontSize: responsiveFontSize(4)
    },
    header: {
        height: responsiveScreenHeight(10),
        flexDirection: 'row',
        alignItems: 'center',
    },
    hintText: {
        fontFamily: 'NunitoSans-Regular',
        color: '#8391A1',
        fontSize: responsiveFontSize(2),
        textAlign: 'center',
        marginTop: responsiveScreenHeight(5)
    },
    headerTextContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    headerText: {
        fontFamily: 'NunitoSans-Bold',
        fontSize: responsiveFontSize(3)
    },
    socialBtnContainer: {
        width: '50%',
        paddingHorizontal: responsiveScreenWidth(1),
        paddingVertical: responsiveScreenHeight(1),
    },
    mt_2: {
        marginTop: responsiveScreenHeight(1),
        flexDirection: 'row',
        alignItems: 'center',
    },
    mt_3: {
        marginTop: responsiveScreenHeight(6)
    },
    footerTextSuggestion: {
        fontSize: responsiveFontSize(2.1),
        color: colorGrey,
        fontFamily: 'NunitoSans-Regular',
    },
    footerContainer: {
        marginStart: responsiveScreenWidth(5),
        position: 'absolute',
        width: '100%',
        bottom: responsiveScreenHeight(1.3),
        flexDirection: 'row',
        justifyContent: 'center',
    },
    navText: {
        color: colorPrimary,
        fontSize: responsiveFontSize(2.1),
        fontFamily: 'NunitoSans-Regular',
    }
})