
import React from "react";
import { API_KEY_QUOTE } from "@env"
import { Text, View, Image, ImageBackground, ScrollView, Button, Pressable, Modal, StatusBar, ActivityIndicator, Alert, StyleSheet, FlatList, RefreshControl, TextInput, TouchableOpacity } from "react-native";
import { useState } from "react";
import { useEffect } from "react";


export default function Quote({ navigation }) {
    const [quote, setQuote] = useState('');
    const fetchQuote = async () => {
        try {
            console.log('API_KEY:', API_KEY_QUOTE);
            const response = await fetch(
                'https://api.api-ninjas.com/v1/quotes?category=success',
                {
                    method: 'GET',
                    headers: {
                        'X-Api-Key': API_KEY_QUOTE,
                    },
                }
            );
            console.log("fetching done")
            if (response.status === 200) {
                console.log(response.status)
                const data = await response.json();
                setQuote(data[0].quote);
            } else
                console.log(response.status)
        } catch (error) {
            console.error('Error fetching quote:', error);
        }
    };
    useEffect(() => {
        fetchQuote();
    }, []);

    return (

        <View style={styles.Container}>
            <View style={{ flexDirection: "row-reverse" }}>

                <Pressable onPress={() => { navigation.openDrawer() }}>
                    <Image
                        source={require('../Assets/pc.png')}//bitmoji
                        style={{ height: 60, width: 60, borderRadius: 40, marginTop: 10 }}
                    />
                </Pressable>
                <Text style={styles.title}>Daily Quotes</Text>
            </View>
            <View style={styles.subcont}>
                <Text style={styles.quote}>{quote}</Text>
            </View>
            <TouchableOpacity style={styles.button} onPress={fetchQuote}>
                <Text style={styles.buttonText}>New Quote</Text>
            </TouchableOpacity>

        </View>
    )
}


const styles = StyleSheet.create({
    Container: { paddingTop: 45, paddingHorizontal: 15, height: "100%", backgroundColor: "#050C2B" },
    subcont: { height: 400, width: '100%', backgroundColor: "#303b6d", borderRadius: 100, alignItems: "center", justifyContent: "center", marginTop: 50, padding: 30 },
    title: { fontSize: 36, fontWeight: "600", color: "white", marginTop: 20, marginRight: 50 },
    quote: { fontSize: 28, color: "white" },
    bannerContainer: { justifyContent: "center", alignItems: "center", flex: 1 },
    banner: { height: 300, width: 300 },
    button: { width: "100%", backgroundColor: "#1A759F", padding: 16, borderRadius: 16, alignItems: "center", marginBottom: 45, backgroundColor: "#303b6d", marginTop: 30 },
    buttonText: { fontSize: 24, fontWeight: "600", color: "white" },


})