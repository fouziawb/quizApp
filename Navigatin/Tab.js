import * as React from 'react';
import { Text, View ,Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import StudyTipsScreen from '../Screens/StudyTipsScreen';
import TodoListScreen from '../Screens/Todo';  
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
        <Tab.Navigator
        screenOptions={{tabBarStyle:{borderRadius:15 ,backgroundColor:"#303b6d" ,position:"absolute" ,marginBottom:15 ,height:90 , borderBlockEndColor:"#303b6d" ,tabBarActiveBackgroundColor:'#303b6d',borderTopColor: "#303b6d" }  , headerShown: false}
        
    }
        >
          <Tab.Screen name="To Do List" component={TodoListScreen}  options={{

tabBarIcon: ({ focused }) => (
    <Image source={require("../Assets/list.png")} style={{ height: 35, width: 35 }}></Image>
),}}/>
          <Tab.Screen name="Study Tips" component={StudyTipsScreen}  options={{

tabBarIcon: ({ focused }) => (
    <Image source={require("../Assets/lightt.png")} style={{ height: 40, width: 40 }}></Image>
),}} />
        </Tab.Navigator>
      );    
}
