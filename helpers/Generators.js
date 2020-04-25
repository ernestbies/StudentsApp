import {goToScreen} from './GoToScreen';
import {StudentItem} from '../components/StudentItem';
import React from 'react';
import {Image, StyleSheet, Text, View} from "react-native";

export const generateHomePageButtons = (that) => {
    let view = [];

    that.state.students.map((item) => {
        view.push(
          <StudentItem key={item.index} item={item} click={() => {goToScreen(that, 'Student', item.index)}}/>
        );
    });

    return view;
};

export const generateFilteredHomePageButtons = (that, search) => {
    let view = [];

    that.state.students.filter((item) => {
        return item.index.includes(search);
    }).map((item) => {
        view.push(
            <StudentItem key={item.index} item={item} click={() => {goToScreen(that, 'Student', item.index)}}/>
        );
    });

    return view;
};

export const generateLoadingPage = () => {
    let view = [];

    view.push(<View style={styles.loading}>
        <Image style={styles.loadingImage}
               source={require('../images/logo.png')}/>
        <Text style={styles.loadingTxt}>Fetching data</Text>
    </View>);

    return view;
};


const styles = StyleSheet.create({
    loading: {
        flex: 1,
        backgroundColor: '#222',
        justifyContent: 'center',
        alignItems: 'center'
    },
    loadingTxt: {
        fontSize: 25,
        fontFamily: 'sans-serif',
        padding: 5,
        color: 'white'
    },
    loadingImage: {
        width: 250,
        height: 250,
        resizeMode: 'stretch'
    }
});

