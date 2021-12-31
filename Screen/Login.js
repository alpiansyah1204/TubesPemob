import React, { useState, useEffect } from 'react';

import { View, Text, StyleSheet, Dimensions, TouchableOpacity, ScrollView, Image, ImageBackground, TextInput, Touchable, Modal, TouchableWithoutFeedback } from 'react-native';


const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const Login = ({ navigation }) => {
    const [Username, setUsername] = useState('alpian');
    const [Password, setPassword] = useState('1');
    var [data, setData] = useState([]);
    var Datasementara = [];
    var ifusername = [];
    const [Isvisible, setIsvisible] = useState(false)
    const [isWrong, setisWrong] = useState(true)


    const CheckData = async () => {
        try {
            let Fetch = 'http://10.0.2.2:3000/get/login/' + Username + '/' + Password
            console.log(Fetch)
            const response = await fetch(Fetch)
            const json = await response.json();
            Datasementara = json.data
            console.log("Checking password and username")
            console.log(Datasementara)
        }
        catch (error) {

        } finally {
            if (Datasementara.length >= 1) {
                navigation.navigate('Postingan',{username : Username ,password:Password})
            }
            else {
                let Fetch = 'http://10.0.2.2:3000/get/username/' + Username
                console.log(Fetch)
                const response = await fetch(Fetch)
                const json = await response.json();
                ifusername = json.data
                console.log(ifusername)
                setIsvisible(true)
                if (ifusername.length == 1) {
                    console.log('username right but password is wrong')
                    setisWrong(true)
                }
                else {
                    console.log('user not found')
                    setisWrong(false)
                }
            }
        }


    };

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
                                            { isWrong? "Incorrect Password":"Login Failed"}
                                        </Text>
                                    </View>
                                    <View style={{ backgroundColor: '#', width: 250, height: 50, justifyContent: 'center', alignItems: 'center', }}>
                                        <Text style={{ fontSize: 18, fontWeight: '600', textAlign: 'center' }}>
                                            {isWrong? "The password you entered is incorrect please try again":"Your Username or Password is incorrect Please try again"}
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
            <View style={{ height: windowHeight / 2, width: windowWidth, backgroundColor: 'FDFDFD', position: 'absolute' }}>
                <ImageBackground style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }} source={require('../images/bg_login.png')}>
                    <View style={{ height: '50%', width: '50%', backgroundColor: '#', alignItems: 'center' }}>
                        <View style={{ height: '60%', width: '100%', backgroundColor: '#', alignItems: 'center', justifyContent: 'center' }}>
                            <ImageBackground style={{ flex: 1, height: '87%', width: '90%' }} source={require('../images/logo(1).png')}></ImageBackground>
                        </View>

                        <Text style={{ fontSize: 25, fontWeight: 'bold', color: 'white' }}>Welcome Back</Text>
                        <Text style={{ fontSize: 15, color: 'white' }}>Login to your account</Text>
                    </View>
                </ImageBackground>
            </View>
            <ScrollView >
                <View style={{ alignItems: 'center' }}>
                    <View style={{ flex: 1, width: '70%', backgroundColor: '#', paddingTop: 450 }}>

                        <View style={{ height: 80, backgroundColor: '#', alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
                            <View style={styles.shadowBall}>
                                <Image style={{ width: 25, height: 25 }} source={require('../images/User.png')} />
                            </View>
                            <View style={styles.shadowRod}>
                                <TextInput style={{ marginLeft: 20 }} placeholder='Username'
                                    onChangeText={(item) => setUsername(item)}
                                />
                            </View>
                        </View>

                        <View style={{ height: 80, backgroundColor: '', alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
                            <View style={styles.shadowBall}>
                                <Image style={{ width: 25, height: 25}} source={require('../images/password.png')} />
                            </View>
                            <View style={styles.shadowRod}>
                                <TextInput style={{ marginLeft: 20, color: 'black' }} placeholder='Password'
                                    onChangeText={(item) => setPassword(item)} secureTextEntry={true}
                                />
                            </View>
                        </View>

                        <View style={{marginTop:15, height: 50, backgroundColor: '#', alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>

                            <TouchableOpacity onPress={() => CheckData()} style={{ height: 50, width:120, backgroundColor: '#00B4D8', borderRadius: 100, alignItems: 'center', justifyContent: 'center' }}>
                                <Text style={{ color: 'white' }}>Sign in</Text>
                            </TouchableOpacity>

                        </View>

                        <View style={{ height: 60, backgroundColor: '#', alignItems: 'center', justifyContent: 'center', flexDirection: 'row' }}>
                            <Text>Don't have any account ? </Text>
                            <TouchableOpacity onPress={() => navigation.navigate('Regis')}>
                                <Text style={{ color: '#00B4D8' }}>sign up here</Text>
                            </TouchableOpacity>

                        </View>
                    </View>
                </View>
            </ScrollView>
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