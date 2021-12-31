import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, Modal, TextInput, TouchableWithoutFeedback } from 'react-native';
export const EditProfil = ({ navigation, route }) => {

    const { username } = route.params
    console.log('username')
    console.log(username)
    const { password } = route.params
    console.log('password ')
    console.log(password)
    const [data, setData] = useState('')
    const [Username, setUsername] = useState('')
    const [Password, setPassword] = useState('')
    const [Isvisible, setIsvisible] = useState(false)
    const [Iswrong, setIswrong] = useState(false)
    var Content = []
    var Data = []
    const getData = async () => {
        try {
            const response = await fetch('http://10.0.2.2:3000/username/' + username);
            const json = await response.json();

            Content = json.data
            console.log('Content')
            console.log(Content)

            setData(Content);
            console.log('data')
            console.log(data)
        } catch (error) {
            console.error(error);
        }

    }



    useEffect(() => {
        console.log('harus pertama')
        setUsername(username)
        setPassword(password)
        getData();
    }, []);
    const updatelike = async () => {
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
                setIswrong(true)
            }
            else if (Data.length == 0) {
                const response = await fetch('http://10.0.2.2:3000/userUpdate/', {
                    method: 'PUT',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        username: Username,
                        password: Password,
                        oldusername: username
                    })
                });

                setIsvisible(true)
                setIswrong(false)
            }





        } catch (error) {
            console.error(error);
        } finally {

            console.log('finally')


        }
    }

    return (
        <View style={{ width: 400, height: 812, backgroundColor: '#fefefe' }}>

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
                                            {Iswrong ? 'cant update' : 'update successfully'}
                                        </Text>
                                    </View>
                                    <View style={{ backgroundColor: '#', width: 250, height: 50, justifyContent: 'center', alignItems: 'center', }}>
                                        <Text style={{ fontSize: 18, fontWeight: '600', textAlign: 'center' }}>
                                            {Iswrong ? 'username already used' : 'username and password successfully changed'}
                                        </Text>
                                    </View>
                                </View>

                            </TouchableWithoutFeedback>
                            {Iswrong ?
                                (<TouchableOpacity onPress={() => {
                                    setUsername(username)
                                    setPassword(password)
                                    setIsvisible(false)
                                }} style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: '#', height: 70 }}>
                                    <Text style={{ fontSize: 18, fontWeight: '600', textAlign: 'center', color: '#00B4D8' }}>OK</Text>
                                </TouchableOpacity>) :
                                (
                                    <TouchableOpacity onPress={() => {
                                        console.log('ok')
                                        setIsvisible(false)
                                        setUsername(Username)
                                        setPassword(Password)
                                        navigation.navigate('EditProfil', { username: Username, password: Password })
                                    }} style={{ justifyContent: 'center', alignItems: 'center', backgroundColor: '#', height: 70 }}>
                                        <Text style={{ fontSize: 18, fontWeight: '600', textAlign: 'center', color: '#00B4D8' }}>OK</Text>
                                    </TouchableOpacity>)

                            }

                        </View>

                    </View>
                </TouchableWithoutFeedback>
            </Modal>


            <View style={{ width: 400, height: 82, backgroundColor: '#', justifyContent: 'flex-end', alignItems: 'center', borderBottomColor: '#404040', borderBottomWidth: 0 }}>
                <View style={{ width: 308, height: 62, backgroundColor: '#',  }}>
                    <View style={{width: 308, height: 62, ustifyContent: 'flex-start', flexDirection: 'row', alignItems: 'center',borderBottomColor:'#404040' , }}>
                        <TouchableOpacity onPress={() => navigation.navigate('Postingan', { username: username, password: password })}>
                            <Image style={{ width: 24, height: 24 }} source={require('../images/Silang.png')} />
                        </TouchableOpacity>
                        <Text style={{ bottom: 1, marginRight: 3, marginLeft: 10, fontSize: 14, fontWeight: 'bold' }}>Edit Profil</Text>
                        <View style={{ width: 218, height: 62, backgroundColor: '#fefefe', justifyContent: 'center', alignItems: 'flex-end' }}>
                            <TouchableOpacity onPress={() => { Username == username ? ([setIsvisible(true), setIswrong(false)]) : (updatelike()) }}>
                                <Image style={{ width: 24, height: 24 }} source={require('../images/Ceklis.png')} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
            <View style={{ width: 400, height: 730, backgroundColor: '#fefefe' }}>
                <View style={{ width: 400, height: 161, alignItems: 'center' }}>
                    <View style={{ marginTop: 15, width: 316, height: 180, backgroundColor: '#fefefe', justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ width: 85, height: 85, borderRadius: 100, backgroundColor: '#fefefe', shadowColor: '#0D82BD', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.1, shadowRadius: 2, elevation: 10, justifyContent: 'center', alignItems: 'center' }}>
                            <Image style={{ width: 24, height: 24 }} source={require('../images/User.png')} />
                        </View>
                        <View style={{ width: 191, height: 36, backgroundColor: '#fefefe', marginTop: 10, alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={{ fontSize: 13, color: '#57A5CE' }}>Change Profil Photo</Text>
                        </View>
                    </View>
                </View>
                <View style={{ width: 400, height: 566, alignItems: 'center' }}>
                    <View style={{ width: 316, height: 190, justifyContent: 'space-evenly', alignItems: 'center' }}>
                        <View style={{ width: 272, height: 58, flexDirection: 'row', backgroundColor: '#fefefe', alignItems: 'center' }}>
                            <View style={{ width: 58, height: 58, borderRadius: 100, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fefefe', shadowColor: '#0D82BD', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.1, shadowRadius: 2, elevation: 10 }}>
                                <Image style={{ width: 24, height: 24 }} source={require('../images/User.png')} />
                            </View>
                            <View style={{ right: 10, width: 214, height: 45, borderTopRightRadius: 15, borderBottomRightRadius: 15, backgroundColor: '#fefefe', shadowColor: '#0D82BD', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.1, shadowRadius: 2, elevation: 10 }}>
                                <TextInput value={Username}
                                    placeholder=' Username' style={{ left: 10 }}
                                    onChangeText={(item) => setUsername(item)}
                                ></TextInput>
                                {console.log('data.username')}
                                {console.log(username)}
                            </View>
                        </View>
                        <View style={{ width: 272, height: 58, flexDirection: 'row', alignItems: 'center', backgroundColor: '#fefefe' }}>
                            <View style={{ width: 58, height: 58, borderRadius: 100, backgroundColor: '#fefefe', justifyContent: 'center', alignItems: 'center', shadowColor: '#0D82BD', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.1, shadowRadius: 2, elevation: 10 }}>
                                <Image style={{ width: 24, height: 24 }} source={require('../images/Kunci.png')} />
                            </View>
                            <View style={{ right: 10, width: 214, height: 45, borderTopRightRadius: 15, borderBottomRightRadius: 15, backgroundColor: '#fefefe', shadowColor: '#0D82BD', shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.1, shadowRadius: 2, elevation: 10 }}>
                                <TextInput value={Password}
                                secureTextEntry={true}
                                    placeholder=' Password' style={{ left: 10 }}
                                    onChangeText={(item) => setPassword(item)}
                                ></TextInput>
                                {console.log('data.password')}
                                {console.log(password)}
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        </View>
    )
}
