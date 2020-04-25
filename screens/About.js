import React, {Component} from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';

export default class About extends Component{
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.titleTxt}>Students App</Text>
                <Image style={{width: '50%', height: '30%', alignSelf: 'center', marginTop: '5%'}}
    source={require('../images/logo.png')}/>
                <Text style={styles.aboutTxt}>Students App:
                    <Text style={styles.detailsTxt}> application to follow your results from the subject TiJO.</Text>
                </Text>
                <Text style={styles.aboutTxt}>Author:
                    <Text style={styles.detailsTxt}> Ernest Bieś</Text>
                </Text>
                <Text style={styles.aboutTxt}>Version:
                    <Text style={styles.detailsTxt}> 1.0</Text>
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#222',
    },
    titleTxt: {
        marginTop: 20,
        textAlign: 'center',
        fontSize: 32,
        fontFamily: 'RobotoCondensed-Regular',
        color: 'orange'
    },
    aboutTxt: {
        fontSize: 20,
        padding: 2,
        color: 'orange',
        textAlign: 'center',
        fontFamily: 'sans-serif'
    },
    detailsTxt: {
        color: 'white'
    },
    btnContainer: {
        margin: 10
    }
});
