import React from "react";
import { Text, View, Image, ImageBackground, ScrollView, Button, Pressable, Modal, StatusBar, ActivityIndicator, Alert, StyleSheet, FlatList, RefreshControl, TextInput, TouchableOpacity } from "react-native";
import { useState } from "react";
import { useEffect } from "react";
import { Layout } from "react-native-reanimated";
import { db } from "../firebase"
import { ref, set, onValue } from "firebase/database"

export default function Quiz({ navigation }) {
    const [questions, setQuestions] = useState();
    const [qnum, setQnum] = useState(0);
    const [options, setOptions] = useState([]);
    const [resultCount, setResultCount] = useState(0);
    const [score, setScore] = useState(0);
    const [isLoading, setIsloading] = useState(false);
    const [canSelect, setCanSelect] = useState(true);
   // const addFirebase = firebase.firestore().collection("scoreData");
    const scoreID = "s90gvusod9u7a0";

    const getQuiz = async () => {
        setIsloading(true);
        const url = 'https://opentdb.com/api.php?amount=10&category=18&type=multiple&encode=url3986';
        const res = await fetch(url);
        const data = await res.json();

        setQuestions(data.results);
        setOptions(getAndShuffleOptions(data.results[0]));
        setIsloading(false);
    };

    useEffect(() => {
        getQuiz();
    }, []);

    const shuffleArray = (array) => {
        for (let i = array.length - 1; i > 0; i--) {
            let j = Math.floor(Math.random() * (i + 1));
            let temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
    };

    const handleNextPress = () => {
        setCanSelect(true)
        if (qnum !== 9) {
            setQnum(qnum + 1);
            setOptions(getAndShuffleOptions(questions[qnum + 1]));
        }
    };

    const handleSelctedOptin = (_option) => {
        if (canSelect) {
            const isCorrect = _option === questions[qnum].correct_answer;

            if (isCorrect) {
                setResultCount(resultCount + 1);
            }

            const updatedOptions = options.map((option) => {
                if (option.optionText === _option) {
                    return {
                        optionText: option.optionText,
                        optionStyle: {
                            ...styles.optionButton,
                            backgroundColor: isCorrect ? 'green' : 'red',
                        },
                    };
                }
                return option;
            });

            // if (qnum !== 9) {
            //     setQnum(qnum + 1);
            //     setOptions(getAndShuffleOptions(questions[qnum + 1]));
            // }

            // if (qnum === 9) {
            //     navigation.navigate("Result", { finalResult: resultCount });
            // }

            setOptions(updatedOptions);
            setCanSelect(false)
        }
    };

        useEffect(()=>{
        const startCountRef = ref(db,scoreID);
        onValue(startCountRef, (snapshot)=>{
            const data = snapshot.val().score;
		    console.log(data);
                const newScore = Object.keys(data).map(key => ({
                    id:key,
                    ...data[key]
                }));
                setScore(data);
                console.log(score);
            })
        },[]) 
    


    //add to db
    const addScoreToFirebase =(resultCount)=>{
        const ii =scoreID
        console.log("resultCount "+resultCount)
        const currentScore = score+resultCount
        console.log("currentScore "+currentScore)
        set(ref(db,ii),{
            score:currentScore,
        });
    }

    const updateScoreToFirebase = (resultCount) =>{
        const ii =scoreID
        const currentScore = score
        setScore(currentScore+resultCount)
        set(ref(db,ii),{
            score:score,
        });
        
    }

    const handleShowResult = () => {
        addScoreToFirebase(resultCount);
        navigation.navigate("Result", { finalResult: resultCount });  
    };

    const getAndShuffleOptions = (_qustion) => {
        const options = [..._qustion.incorrect_answers];
        options.push(_qustion.correct_answer);
        shuffleArray(options);
        return options.map((option) => ({
            optionText: option,
            optionStyle: styles.optionButton,
        }));
    };

    return (
        <View style={styles.container}>
            
            { isLoading? (<View><ActivityIndicator size={"large"}/></View>) :questions && (
                <View style={styles.parent}>
                    <View style={styles.topContainer}>
                        <Text style={styles.question}>Q. {decodeURIComponent(questions[qnum].question)}</Text>
                    </View>
                    <View style={styles.midContainer}>
                        <FlatList
                            data={options}
                            renderItem={({ item }) => (
                                <TouchableOpacity
                                    style={{ ...item.optionStyle }}
                                    onPress={() => {
                                        handleSelctedOptin(item.optionText);
                                    }}
                                >
                                    <Text style={styles.optionText}>{decodeURI(item.optionText)}</Text>
                                </TouchableOpacity>
                            )}
                        />
                    </View>
                    <View style={styles.footerContainer}>
                        {qnum !== 9 && (
                            <TouchableOpacity style={styles.button} onPress={handleNextPress}>
                                <Text style={styles.buttonText}>SKIP</Text>
                            </TouchableOpacity>
                        )}
                        {qnum !== 9 && (
                            <TouchableOpacity style={styles.button} onPress={handleNextPress}>
                                <Text style={styles.buttonText}>Next</Text>
                            </TouchableOpacity>
                        )}
                        {qnum === 9 && (
                            <TouchableOpacity style={styles.button} onPress={handleShowResult}>
                                <Text style={styles.buttonText}>SHOW RESULTS</Text>
                            </TouchableOpacity>
                        )}
                    </View>
                </View>
            )}
        </View>
    );
}



const styles = StyleSheet.create({
    container: { paddingTop: 45, paddingHorizontal: 15, height: "100%", backgroundColor: "#050C2B" },
    parent: { height: "100%" },
    topContainer: { marginVertical: 16 },
    question: { fontSize: 28, color: "white" },
    midContainer: { marginVertical: 16, flex: 1 },
    optionButton: { paddingVertical: 12, marginVertical: 6, backgroundColor: "#34A0A4", paddingHorizontal: 12, borderRadius: 12, backgroundColor: "#303b6d" },
    optionText: { fontSize: 18, fontWeight: "500", color: "white" },
    footerContainer: { flexDirection: "row", justifyContent: "space-between", marginBottom: 20 },
    button: { backgroundColor: "#1A759F", padding: 12, borderRadius: 16, alignItems: "center", marginBottom: 30, paddingHorizontal: 16, backgroundColor: "#303b6d" },
    buttonText: { fontSize: 18, fontWeight: "600", color: "white" },

})