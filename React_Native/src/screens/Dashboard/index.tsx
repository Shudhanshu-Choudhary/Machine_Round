/* eslint-disable prettier/prettier */
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicon from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Home from '../Home';

const Tab = createBottomTabNavigator();
const Dashboard: React.FC<any> = () => {
  
  return (
    <>
      <Tab.Navigator
       //@ts-ignore
        tabBarOptions={{
          activeTintColor: '#34b8ed',
          inactiveTintColor: '#000',
          activeBackgroundColor: 'white',
          inactiveBackgroundColor: 'white',
          style: {
            backgroundColor: 'purple',
            paddingTop: 10,
          },
        }}>
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            headerShown: false,
            tabBarIcon: () => <BottomIcons name="home" />,
          }}
        />
        <Tab.Screen
          name="About"
          component={Home}
          options={{
            headerShown: false,
            tabBarIcon: () => (
              <FontAwesome name="th-large" size={20} color="#34b8ed" />
            ),
          }}
        />
        <Tab.Screen
          name="Services"
          component={Home}
          options={{
            headerShown: false,
            tabBarIcon: () => (
              <MaterialCommunityIcons
                name="shopping"
                size={20}
                color="#34b8ed"
              />
            ),
          }}
        />
        <Tab.Screen
          name="Account"
          component={Home}
          options={{
            headerShown: false,
            tabBarIcon: () => <BottomIcons name="person" />,
          }}
        />
      </Tab.Navigator>
    </>
  );
};

const BottomIcons = (props: any) => {
  return <Ionicon name={props.name} size={20} color="#34b8ed" />;
};
export default Dashboard;
