import React, {useState} from 'react';
import {useEffect} from 'react';
import {
    View,
    Text,
    ImageBackground,
    Image,
    TouchableOpacity,
} from 'react-native';
import {
    DrawerContentScrollView,
    DrawerItemList,
} from '@react-navigation/drawer';
import { db } from "../firebase"
import { ref, set, onValue } from "firebase/database"


const CustomDrawer = props => {

    const [score, setScore] = useState(0);
    const scoreID = "s90gvusod9u7a0";
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
    
        return (
            <View style={{ flex: 1 }}>
            <DrawerContentScrollView
                {...props}
                contentContainerStyle={{ backgroundColor: "#303b6d" }}>
                <ImageBackground
                    source={require('../Assets/backround.avif')}//menue background
                    style={{ padding: 20 }}>
                    <Image
                        source={require('../Assets/pc.png')}//bitmoji
                        style={{ height: 80, width: 80, borderRadius: 40, marginBottom: 10 }}
                    />
                    <Text
                        style={{
                            color: '#fff',
                            fontSize: 18,
                            fontFamily: 'Roboto-Medium',
                            marginBottom: 5,
                        }}>
                        Reema Hamad
                    </Text>
                    <View style={{ flexDirection: 'row' }}>
                        <Text
                            style={{
                                color: '#fff',
                                fontFamily: 'Roboto-Regular',
                                marginRight: 5,
                            }}>
                                {score} score
                            </Text>
                            <Image source={require("../Assets/coins.png")} style={{ height: 14, width: 14 }}></Image>
                        </View>
                    </ImageBackground>
                    <View style={{ flex: 1, backgroundColor: '#fff', paddingTop: 10 }}>
                        <DrawerItemList {...props} />
                    </View>
                </DrawerContentScrollView>
                <View style={{ padding: 20, borderTopWidth: 1, borderTopColor: '#ccc' }}>
                    <TouchableOpacity onPress={() => { }} style={{ paddingVertical: 15 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image source={require("../Assets/share.png")} style={{ height: 22, width: 22 }}></Image>
                            <Text
                                style={{
                                    fontSize: 15,
                                    fontFamily: 'Roboto-Medium',
                                    marginLeft: 5,
                                }}>
                                Tell a Friend
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => { }} style={{ paddingVertical: 15 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Image source={require("../Assets/signout.png")} style={{ height: 22, width: 22 }}></Image>
                            <Text
                                style={{
                                    fontSize: 15,
                                    fontFamily: 'Roboto-Medium',
                                    marginLeft: 5,
                                }}>
                                Sign Out
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        );
    };
    
    export default CustomDrawer;