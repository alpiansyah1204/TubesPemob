import * as React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView, Image, ImageBackground, TextInput, Touchable } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Login } from './Screen/Login';
import { Registration } from './Screen/Regis';
import { PostList } from './Screen/PostinganList';
import { Comment } from './Screen/Comment';
import { EditProfil } from './Screen/EditProfil';
import { testing } from './test';
import { AddPost } from './Screen/Addpost';
import { Editpost } from './Screen/EditPost';
import HalamanUtama from './Screen/Halamanutama';

const Stack = createNativeStackNavigator()
const Bewd = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='HalamanUtama' 
            screenOptions={
                {
                    headerShown: false
                }
            }>
            <Stack.Screen name='HalamanUtama' component={HalamanUtama}/>
                <Stack.Screen name='Login' component={Login}/>
                <Stack.Screen name='Regis' component={Registration}/>
                <Stack.Screen name='Postingan' component={PostList}/>
                <Stack.Screen name='Comment' component={Comment}/>
                <Stack.Screen name='EditProfil' component={EditProfil}/>
                <Stack.Screen name='testing' component={testing}/>
                
                <Stack.Screen name='AddPost' component={AddPost}/>
                <Stack.Screen name='Editpost' component={Editpost}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Bewd