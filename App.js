
import React from "react";
import { Text, View, Image, ImageBackground, ScrollView, Button, Pressable, Modal, StatusBar, ActivityIndicator, Alert, StyleSheet, FlatList, RefreshControl, TextInput } from "react-native";
import { useState } from "react";
import { NavigationContainer } from '@react-navigation/native';
import Mystack from "./Navigatin/Index";
import Quote from "./Screens/Quote";


export default function App() {
  return (
    <NavigationContainer>
      <Mystack></Mystack>
    </NavigationContainer>
    // <View>
    //   <Quote></Quote>

    // </View>

  )
}