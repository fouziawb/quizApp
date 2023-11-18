import React from "react";
import { Text, View, Image, ImageBackground, ScrollView, Button, Pressable, Modal, StatusBar, ActivityIndicator, Alert, StyleSheet, FlatList, RefreshControl, TextInput, TouchableOpacity } from "react-native";
import { useState } from "react";

export default function Title(props) {
    return (

        <View style={styles.container}>
            <Text style={styles.title} >{props.title}</Text>
        </View>
    )
}


const styles = StyleSheet.create({
    container: { paddingVertical: 5, justifyContent: "center", alignItems: "center", marginTop: 20 },
    title: { fontSize: 36, fontWeight: "600", color: "white" }
})