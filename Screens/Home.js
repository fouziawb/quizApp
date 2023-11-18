
import React from "react";
import { Text, View, Image, ImageBackground, ScrollView, Button, Pressable, Modal, StatusBar, ActivityIndicator, Alert, StyleSheet, FlatList, RefreshControl, TextInput, TouchableOpacity } from "react-native";
import { useState } from "react";
import Title from "../Components/Title";

export default function Home({ navigation }) {
    return (

        <View style={styles.Container}>
            <View style={{ flexDirection: "row-reverse" }}>
                <Pressable onPress={() => { navigation.openDrawer() }}>
                    <Image
                        source={require('../Assets/pc.png')}//bitmoji
                        style={{ height: 60, width: 60, borderRadius: 40, marginTop: 10 }}
                    />
                </Pressable>
                <Text style={styles.title}>QuizByte</Text>

            </View>
            <View style={styles.bannerContainer}>
                <Image source={require("../Assets/computer.gif")} style={styles.banner} resizeMode="contain"></Image>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate("Quiz")} style={styles.button}>
                <Text style={styles.buttonText}>Start</Text>
            </TouchableOpacity>

        </View>
    )
}


const styles = StyleSheet.create({
    Container: { paddingTop: 40, paddingHorizontal: 15, height: "100%", backgroundColor: "#050C2B" },
    title: { fontSize: 36, fontWeight: "600", color: "white", marginRight: 70, marginTop: 20 },
    bannerContainer: { justifyContent: "center", alignItems: "center", flex: 1 },
    banner: { height: 300, width: 300 },
    button: { width: "100%", backgroundColor: "#1A759F", padding: 16, borderRadius: 16, alignItems: "center", marginBottom: 45, backgroundColor: "#303b6d" },
    buttonText: { fontSize: 24, fontWeight: "600", color: "white" },


})