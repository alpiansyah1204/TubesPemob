import React, { Component, useState } from 'react';
import { View, Text, Button, StyleSheet, Image,Dimensions } from 'react-native';
import { StackActions } from '@react-navigation/native'

import { Login } from './Screen/Login';
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

class HalamanUtama extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount() {
        setTimeout(() => {
            this.props.navigation.dispatch(StackActions.replace('Login'));
        }, 2000);
    }
    render() {
        return (
            <View style={{ backgroundColor: '#ffff', flex:1 }}>
                <View style={{ height: 304, width: windowWidth }}>
                    <Image style={{ width: windowWidth, height: 304 }} source={require('../images/atasan.png')} />
                </View>
                <View style={{ backgroundColor: '#ffff', height: 508, width: 400, alignItems: 'center' }}>
                    <View style={{ backgroundColor: '#ffff', height: 217, width: 300, alignItems: 'center' }}>
                        <Image  resizeMode={'contain'} style={{ width: 287, height: 163 }} source={require('../images/LOGO.png')} />
                        <Text style={{ fontSize: 36, color: '#0077B6', fontWeight: 'bold' }}>BEWD</Text>
                    </View>
                </View>
            </View>
        );
    }
}
export default HalamanUtama;
