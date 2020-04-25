import React, {Component} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import {SearchBar} from 'react-native-elements';
import {fetchAllStudentsGrades} from '../helpers/FetchData';
import {generateFilteredHomePageButtons, generateHomePageButtons, generateLoadingPage} from "../helpers/Generators";

export default class HomePage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isFetching: false,
            students: null,
            search: '',
        };
    }

    componentDidMount() {
        SplashScreen.hide();
        fetchAllStudentsGrades(this);
    }

    // TODO : Refreshing page
    onRefresh() {
        this.setState({isFetching: true}, () => {
            fetchAllStudentsGrades(this);
        });
    }

    updateSearch = (search) => {
        this.setState({
            search: search
        });
    };

    render() {
        if(this.state.students !== null) {
            return (
                <View style={styles.container}>
                    <SearchBar placeholder="Search through index numbers..." onChangeText={this.updateSearch} value={this.state.search} round={true}/>
                    {
                        this.state.search ?
                            <ScrollView style={styles.buttonsView}>
                                <View key={1} style={{flexDirection: 'row'}}>
                                    <View style={styles.block}/>
                                    <Text style={styles.categoryTitle}>Know your grades <Text style={{color: 'yellow'}}>everywhere.</Text></Text>
                                </View>
                                {generateFilteredHomePageButtons(this, this.state.search)}
                            </ScrollView>
                            :
                            <ScrollView style={styles.buttonsView}>
                                <View key={1} style={{flexDirection: 'row'}}>
                                    <View style={styles.block}/>
                                    <Text style={styles.categoryTitle}>Know your grades <Text style={{color: 'yellow'}}>everywhere.</Text></Text>
                                </View>
                                {generateHomePageButtons(this)}
                            </ScrollView>
                    }
                </View>
            );
        } else {
            return (
                generateLoadingPage()
            );
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#222'
    },
    categoryTitle: {
        width: '100%',
        padding: 10,
        color: 'white',
        fontSize: 25,
        fontFamily: 'sans-serif'
    },
    block: {
        padding: 6,
        marginBottom: 5,
        marginTop: 15,
        backgroundColor: 'yellow'
    },
    header: {
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
        borderBottomWidth: 1,
        backgroundColor: '#FFFFFF'
    },
    headerText: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    buttonsView: {
        borderBottomWidth: 2,
        borderTopWidth: 2,
        backgroundColor: "#222",
    }
});

