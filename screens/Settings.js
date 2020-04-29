import React, {Component} from 'react';
import {Text, View, StyleSheet, Image, TextInput} from 'react-native';
import AsyncStorage from "@react-native-community/async-storage";

export default class Settings extends Component{

    constructor(props) {
        super(props);
        this.state = {
          indexNumber: '30737'
        };

    }

    async componentDidMount(): void {
        this.getIndexNumber();
    }

    setIndex = (index) => {
        AsyncStorage.setItem('indexNumber', index);
        this.setState({
            indexNumber: index
        })
    };

    getIndexNumber = async () => {
        let index = await AsyncStorage.getItem('indexNumber');
        this.setState({
           indexNumber: index
        });
    };

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.titleTxt}>Students App</Text>
                <Image style={{width: '50%', height: '30%', alignSelf: 'center', marginTop: '5%'}}
                       source={require('../images/logo.png')}/>
                <View style={{flexDirection: 'row'}}>
                    <View style={styles.block}/>
                    <Text style={styles.categoryTitle}>Set your <Text style={{color: 'yellow'}}>index number</Text></Text>
                    <View style={styles.block}/>
                </View>
                <Text style={styles.descriptionTitle}>You can know about your grades faster by
                    setting your <Text style={{color: 'yellow'}}>index number</Text>. Your results will be shown
                    in <Text style={{color: 'yellow'}}>My results</Text> option from drawer.</Text>
                <TextInput
                    style={{
                        backgroundColor: '#222',
                        height: 40,
                        width: 380,
                        borderWidth: 2,
                        textAlign: 'center',
                        fontSize: 15,
                        borderColor: 'yellow',
                        color: 'yellow',
                        margin: 15
                    }}
                    onChangeText={(text) => this.setIndex(text)}
                />
                <View style={{flexDirection: 'row'}}>
                    <View style={styles.block}/>
                    <Text style={styles.categoryTitle}>Mounted index number: <Text style={{color: 'yellow'}}>{this.state.indexNumber}</Text></Text>
                    <View style={styles.block}/>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#222',
    },
    categoryTitle: {
        width: '100%',
        padding: 10,
        color: 'white',
        fontSize: 25,
        fontFamily: 'sans-serif'
    },
    descriptionTitle: {
        width: '100%',
        padding: 10,
        color: 'white',
        fontSize: 22,
        fontFamily: 'sans-serif'
    },
    block: {
        padding: 6,
        marginBottom: 5,
        marginTop: 15,
        backgroundColor: 'yellow'
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
