import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../screens/auth/Login';
import SignUp from '../screens/auth/SignUp';
import OnBoardingPage from '../screens/auth/OnBoardingPage';

const Stack = createNativeStackNavigator();

const UnAuthRoutes = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name='OnBoarding' component={OnBoardingPage} options={{ headerShown: false }}  />
        <Stack.Screen name='Login' component={Login} options={{ headerShown: false, animation: "slide_from_bottom"}} />
        <Stack.Screen name='Signup' component={SignUp} options={{ headerShown: false, animation: "slide_from_bottom"}} />
    </Stack.Navigator>
  )
}

export default UnAuthRoutes