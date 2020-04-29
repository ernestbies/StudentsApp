import React, {Component} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {GoToBtn} from '../components/GoToBtn';
import {goToScreen, goToScreenWithIndex} from '../helpers/GoToScreen';
import AsyncStorage from "@react-native-community/async-storage";

export default class Drawer extends Component {

    constructor(props){
        super(props);
        this.state = {
          indexNumber: null
        };
    }

    render() {
        return (
            <View style={styles.drawerContainer}>
                <Text style={styles.titleTxt}>Students App</Text>
                <Image style={{width: '65%', height: '30%', alignSelf: 'center', marginTop: '5%'}}
                       source={require('../images/logo.png')}/>
                <View style={styles.btnContainer}>
                    <GoToBtn onPress={() => goToScreen(this, 'HomePage')} screenName={'Home page'}/>
                    <GoToBtn onPress={() => goToScreenWithIndex(this, 'Student')} screenName={'My results'}/>
                    <GoToBtn onPress={() => goToScreen(this, 'Settings')} screenName={'Settings'}/>
                    <GoToBtn onPress={() => goToScreen(this, 'About')} screenName={'About app'}/>
                </View>
                <Text style={styles.appTxt}>StudentsApp 1.0</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    drawerContainer: {
        flex: 1,
        backgroundColor: "#222"
    },
    logoContainer: {
        margin: 10,
        alignItems: 'center'
    },
    titleTxt: {
        marginTop: 20,
        textAlign: 'center',
        fontSize: 32,
        fontFamily: 'RobotoCondensed-Regular',
        color: 'orange'
    },
    appTxt: {
        textAlign: 'center',
        fontSize: 15,
        color: '#888',
        fontFamily: 'sans-serif',
        marginTop: 130
    },
    btnContainer: {
        margin: 10
    }
});
