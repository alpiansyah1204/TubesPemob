import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, ScrollView, Image, ImageBackground, TextInput, Modal, TouchableWithoutFeedback } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;


export const Registration = ({ navigation }) => {

    const [Username, setUsername] = useState('');
    const [Password, setPassword] = useState('');
    const [Email, setEmail] = useState('');
    const [Already, setAlready] = useState(false);
    const [Isvisible, setIsvisible] = useState(false);
    var Data = []
    var datacadangan = []
    const saveData = async () => {
        try {
            var Fetch = 'http://10.0.2.2:3000/get/username/' + Username
            console.log(Fetch)
            var response = await fetch(Fetch)
            var json = await response.json();
            Data = json.data
            console.log(Data)
            if (Data.length >= 1) {
                console.log("username already taken")
                setIsvisible(true)
                setAlready(true)
            }
            else if (Data.length == 0) {
                const response1 = await fetch('http://10.0.2.2:3000/get/email/' + Email)
                const json1 = await response1.json();
                console.log(json1)
                datacadangan = json1.data
                console.log(datacadangan)
                if (datacadangan.length >= 1) {
                    setIsvisible(true)
                    setAlready(false)
                }
                else {
                    console.log("username and email can be used")
                    response = await fetch('http://10.0.2.2:3000/Signup/', {
                        method: 'POST',
                        headers: {
                            Accept: 'application/json',
                            'Content-Type': 'application/json'
                        },
                        body: JSON.stringify({
                            username: Username,
                            password: Password,
                            email: Email
                        })
                    });
                    json = await response.json();
                    Data = json.massage
                    console.log(Username, Password, Email)
                    navigation.navigate("Login")
                }
            }



        } catch (error) {
            console.error(error);
        }
    }
    return (
        <View style={{ flex: 1, backgroundColor: 'FDFDFD' }}>
            <Modal style={{ flex: 1 }}
                visible={Isvisible}
                transparent={true}
            >
                <TouchableWithoutFeedback onPress={() => setIsvisible(false)}>
                    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#45454540' }}>

                        <View style={{ height: 250, width: 300, backgroundColor: '#F9F9F9', borderRadius: 30 }}>
                            <TouchableWithoutFeedback onPress={() => { }}>
                                <View style={{ height: 180, backgroundColor: '#', justifyContent: 'center', alignItems: 'center', borderBottomColor: '#454545', borderBottomWidth: 0.2 }}>
                                    <View style={{ backgroundColor: '#', width: 240, height: 80, justifyContent: 'center', alignItems: 'center' }}>
                                        <Text style={{ fontSize: 22, fontWeight: '600' }}>
                                            Sorry
                                        </Text>
                                    </View>
                                    <View style={{ backgroundColor: '#', width: 250, height: 50, justifyContent: 'center', alignItems: 'center', }}>
                                        <Text style={{ fontSize: 18, fontWeight: '600', textAlign: 'center' }}>
                                            {Already ? "Username already taken" : "Email already taken"}
                                        </Text>
                                    </View>
                                </View>

                            </TouchableWithoutFeedback>
                            <TouchableOpacity onPress={() => setIsvisible(false)} style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: '#', height: 70 }}>
                                <Text style={{ fontSize: 18, fontWeight: '600', textAlign: 'center', color: '#00B4D8' }}>OK</Text>
                            </TouchableOpacity>
                        </View>

                    </View>
                </TouchableWithoutFeedback>
            </Modal>

            <View style={{ height: 300, backgroundColor: '#', width: windowWidth, position: 'absolute' }}>
                <ImageBackground style={{ flex: 1, height: '105%', alignItems: 'center', justifyContent: 'center' }} source={require('../images/bg_regis.png')}>

                    <View style={{ height: '55%', width: '55%', backgroundColor: '#', alignItems: 'center', justifyContent: 'center' }}>
                        <View style={{ height: '70%', width: '100%', backgroundColor: '#', alignItems: 'center', justifyContent: 'center' }}>
                            <ImageBackground style={{ flex: 1, height: '87%', width: '90%' }} source={require('../images/logo(1).png')}></ImageBackground>
                        </View>
                    </View>
                </ImageBackground>
            </View>
            <View style={{ flex: 1 }}>
                <ScrollView>
                    <View style={{ height: windowHeight, backgroundColor: '#', alignItems: 'center', justifyContent: 'center', paddingTop: 300 }}>

                        <View style={{ height: 100, width: 100, backgroundColor: '#' }}>
                            <Image style={{ width: 100, height: 100 }} source={require('../images/pict.png')} />
                        </View>

                        <View style={{ height: '70%', width: '70%', backgroundColor: '#', }}>

                            <View style={{ height: 80, backgroundColor: '#', alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
                                <View style={styles.shadowBall}>
                                    <Image style={{ width: 25, height: 25 }} source={require('../images/User.png')} />
                                </View>
                                <View style={styles.shadowRod}>
                                    <TextInput style={{ marginLeft: 20 }} placeholder='Username' onChangeText={(item) => setUsername(item)} />
                                </View>
                            </View>

                            <View style={{ height: 80, backgroundColor: '', alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
                                <View style={styles.shadowBall}>
                                    <Image style={{ width: 25, height: 25 }} source={require('../images/email.png')} />
                                </View>
                                <View style={styles.shadowRod}>
                                    <TextInput style={{ marginLeft: 20, color: 'black' }} placeholder='Email' onChangeText={(item) => setEmail(item)} />
                                </View>
                            </View>

                            <View style={{ height: 80, backgroundColor: '', alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
                                <View style={styles.shadowBall}>
                                    <Image style={{ width: 25, height: 25 }} source={require('../images/password.png')} />
                                </View>
                                <View style={styles.shadowRod}>
                                    <TextInput style={{ marginLeft: 20, color: 'black' }} placeholder='Password' onChangeText={(item) => setPassword(item)} secureTextEntry={true} />
                                </View>
                            </View>

                            <View style={{ height: 50, backgroundColor: '#', alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
                                <TouchableOpacity onPress={() => saveData()} style={{ height: 50, width: 120, backgroundColor: '#00B4D8', borderRadius: 100, alignItems: 'center', justifyContent: 'center' }}>
                                    <Text style={{ color: 'white' }}>Sign up</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </ScrollView>
            </View>
        </View>

    )
};

const styles = StyleSheet.create({
    shadowBall: {
        height: 65,
        width: 65,
        borderRadius: 50,
        backgroundColor: '#fefefe',
        shadowColor: '#0D82BD',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },

    shadowRod: {
        height: 50,
        width: '80%',
        backgroundColor: 'white',
        marginLeft: -20, shadowColor: '#0D82BD',
        borderRadius: 50,
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: -1,
        elevation: 5
    }
})