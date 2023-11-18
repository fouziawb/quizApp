
import React from "react";
import { Text, View, Image, ImageBackground, ScrollView, Button, Pressable, Modal, StatusBar, ActivityIndicator, Alert, StyleSheet, FlatList, RefreshControl, TextInput, TouchableOpacity } from "react-native";
import { useState } from "react";
import Title from "../Components/Title"; import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from "../Screens/Home";
import Quote from "../Screens/Quote";
import TodoListScreen from "../Screens/Todo";
import CustomDrawer from "../Screens/customDrawe";
import Tab from '../Navigatin/Tab'


const Drawer = createDrawerNavigator();

export default function HomeDrawer({ navigation }) {
    return (
        <Drawer.Navigator
            drawerContent={props => <CustomDrawer {...props} />}
            screenOptions={{
                headerShown: false,
                drawerActiveBackgroundColor: '#303b6d',
                drawerActiveTintColor: '#fff',
                drawerInactiveTintColor: '#333',
                drawerLabelStyle: {
                    marginLeft: -25,
                    fontFamily: 'Roboto-Medium',
                    fontSize: 15,
                },
            }}>
            <Drawer.Screen
                name="Home"
                component={Home}
                options={{

                    drawerIcon: ({ focused }) => (
                        <Image source={require("../Assets/home.png")} style={{ height: 25, width: 25 }}></Image>
                    ),
                }}
            />
            <Drawer.Screen
                name="Quote"
                component={Quote}
                options={{

                    drawerIcon: ({ focused }) => (
                        <Image source={require("../Assets/quote.png")} style={{ height: 25, width: 25 }}></Image>
                    ),
                }}
            />
            <Drawer.Screen
                name="To Do List"
                component={Tab}
                options={{

                    drawerIcon: ({ focused }) => (
                        <Image source={require("../Assets/list.png")} style={{ height: 25, width: 25 }}></Image>
                    ),
                }}
            />


        </Drawer.Navigator>
    );
}


const styles = StyleSheet.create({



})