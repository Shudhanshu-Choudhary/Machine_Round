import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import DashBoard from '../screens/Home';
import Dashboard from '../screens/Dashboard';

const Stack = createNativeStackNavigator();

const AuthRoutes = () => {
  return (
    <Stack.Navigator>
        <Stack.Screen name='Dashboard' component={Dashboard} options={{ headerShown: false }} />
    </Stack.Navigator>
  )
}

export default AuthRoutes