import { View, Text } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'
import AuthRoutes from './AuthRoutes';
import UnAuthRoutes from './UnAuthRoutes';

const StackNavigation = () => {
  const {isLogin} = useSelector((state: any) => state.user);
  if(isLogin){
    return (
        <AuthRoutes />
    )
  }else{
    return (
        <UnAuthRoutes />
    )
  }
  
}

export default StackNavigation