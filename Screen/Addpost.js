import React from 'react';
import { useEffect, useState } from 'react';
import { Text, View, Image, Button, TouchableOpacity, TextInput } from 'react-native';

export const AddPost = ({ route, navigation }) => {
    const { user } = route.params;
    const { username } = route.params
    console.log('username')
    console.log(username)
    const { password } = route.params
    console.log('password ')
    console.log(password)
    var postID = (Math.random() * (1000 - 1 + 1) + 1); //Gk tahu cara get, jadi ane random
    var likePost = (Math.random() * (1000 - 1 + 1) + 1); // Di random biar gampang
    var totalComments = (Math.random() * (99 - 1 + 1) + 1); // DIrandom bair gampang

    // const [username, setUsername]       = useState(user); //Diambil dari PostinganList
    // const [timePost, setTimePost]       = useState(new Date().getTime());
    const [postCaption, setPostCaption] = useState('');

    const saveData = async () => {
        try {
            const response = await fetch('http://10.0.2.2:3000/post/', {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    username: username,
                    caption: postCaption
                })
            });

            //const json = await response.json();
            //setData(json.data);
        } catch (error) {
            console.error(error);
        } finally {
            navigation.navigate('testing', { username: username, password: password });
        }
    }

    return (
        <View style={{ flex: 1 }}>
            <View style={{ backgroundColor: '#', height: 80, borderBottomColor: "black", borderBottomWidth: 1 }}>
                <View style={{ flexDirection: "row", backgroundColor: "#", width: 70, height: 80, justifyContent: "space-between", alignItems: "center" }}>
                    <View style={{ backgroundColor: "#", height: 50, width: 50, justifyContent: "center", alignItems: "center" }}>
                        <TouchableOpacity onPress={() => navigation.navigate('Postingan')}>
                            <Image resizeMode={'contain'} style={{ height: 30, width: 30 }} source={require("../images/Close_square.png")} />
                        </TouchableOpacity>
                    </View>
                    <View style={{ backgroundColor: "#", height: 80, width: 220 }}></View>
                    <View style={{ backgroundColor: "#", width: 125, height: 80, justifyContent: "center" }}>
                        <TouchableOpacity onPress={() => saveData()}>
                            <View style={{ backgroundColor: "#00B4D8", justifyContent: "center", width: 110, height: 40, alignItems: "center", borderBottomLeftRadius: 22, borderBottomRightRadius: 22, borderTopLeftRadius: 22, borderTopRightRadius: 22 }}>
                                <Text style={{ color: "white", fontSize: 18, fontStyle: "normal", fontWeight: "700" }}>POST</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={{ backgroundColor: "#", height: 100, flexDirection: "row" }}>
                <View style={{ backgroundColor: "#", width: 100, justifyContent: "center", alignItems: "center" }}>
                    <TouchableOpacity>
                        <Image resizeMode={'contain'} style={{ height: 50, width: 50 }} source={require("../images/Frame7.png")} />
                    </TouchableOpacity>
                </View>

                <View style={{ backgroundColor: "#", width: 200, justifyContent: "center" }}>
                    <Text style={{ fontSize: 17 }}>{username}</Text>
                </View>
            </View>
            <View style={{ backgroundColor: "#", height: 460 }}>
                <TextInput
                    style={{ marginHorizontal: 30, padding: 10 }}
                    placeholder="What's happening ?"
                    multiline maxLength={9999}
                    onChangeText={(text) => setPostCaption(text)} />
            </View>


        </View>
    )
}