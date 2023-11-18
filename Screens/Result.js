import React from "react";
import { Text, View, Image, ImageBackground, ScrollView, Button, Pressable, Modal, StatusBar, ActivityIndicator, Alert, StyleSheet, FlatList, RefreshControl, TextInput, Touchable, TouchableOpacity } from "react-native";
import { useState } from "react";
import Title from "../Components/Title";

export default function Result({ route, navigation }) {
    const result = route.params.finalResult
    const imgsrc = result > 5 ? require("../Assets/goodGrade.gif") : require("../Assets/badGrade.gif")
    return (
        <View style={styles.Container}>
            <Title title={"Results"}></Title>
            <View style={styles.circle}>
                <Text style={styles.resultScore}>{result}</Text>
            </View>
            <View style={styles.bannerContainer}>
                <Image source={imgsrc} style={styles.banner} resizeMode="contain"></Image>
            </View>
            <TouchableOpacity onPress={() => navigation.navigate("Home")} style={styles.button}>
                <Text style={styles.buttonText}>Try Again</Text>
            </TouchableOpacity>

        </View>
    )
}





const styles = StyleSheet.create({
    Container: { paddingTop: 40, paddingHorizontal: 15, height: "100%", backgroundColor: "#050C2B" },
    bannerContainer: { justifyContent: "center", alignItems: "center", flex: 1 },
    banner: { height: 300, width: 300 },
    button: { width: "100%", backgroundColor: "#1A759F", padding: 16, borderRadius: 16, alignItems: "center", marginBottom: 45, backgroundColor: "#303b6d", },
    buttonText: { fontSize: 24, fontWeight: "600", color: "white" },
    resultScore: { fontSize: 24, fontWeight: "800", alignSelf: "center", color: "white" },
    circle: {
        width: 100, // Adjust the width and height to set the size of your circle
        height: 100,
        borderRadius: 50, // Make it half of the width and height to create a circle
        backgroundColor: '#303b6d', // Set the background color of the circle
        shadowColor: 'white', // Set the shadow color
        shadowOffset: { width: 1, height: 3 }, // Set the shadow offset (x, y)
        shadowOpacity: 0.9,
        shadowRadius: 4,
        elevation: 3,
        alignItems: "center",
        justifyContent: "center",
        marginLeft: 140
    },

})