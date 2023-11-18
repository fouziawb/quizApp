
import React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import Home from "../Screens/Home";
import Quiz from "../Screens/Quiz";
import Result from "../Screens/Result";
import HomeDrawer from "./HomeDrawer";

const stack = createStackNavigator()


export default function Mystack() {
    return (
        <stack.Navigator screenOptions={{ headerShown: false }}>
            <stack.Screen name="HomeDrawer" component={HomeDrawer} ></stack.Screen>
            <stack.Screen name="Quiz" component={Quiz}></stack.Screen>
            <stack.Screen name="Result" component={Result}></stack.Screen>
        </stack.Navigator>


    )
}

