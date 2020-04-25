import React, {Component} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {generateLoadingPage} from "../helpers/Generators";
import {fetchStudentGrades} from "../helpers/FetchData";

export default class Student extends Component{

    constructor(props) {
        super(props);
        this.state = {
            student: null
        };
    }

    componentDidMount() {
        fetchStudentGrades(this);
    }

    generateLabsView() {
        let view = [];

        this.state.student.labs.map((item) => {
            view.push(
                <View key={item.id} style={styles.studentContainer}>
                    <Text style={styles.information}>Date of lab: <Text
                        style={styles.details}>{item.dateOfLab}</Text></Text>
                    <Text style={styles.information}>Presence: <Text
                        style={styles.details}>{item.presence.toString()}</Text></Text>
                    <Text style={styles.information}>Earned points: <Text
                        style={styles.details}>{item.points}</Text></Text>
                </View>
            );
        });

        return view;
    }

    render() {
        if(this.state.student !== null) {
            return (
                <View style={styles.container}>
                    <ScrollView style={styles.buttonsView}>
                        <View style={{flexDirection: 'row'}}>
                            <View style={styles.block}/>
                            <Text style={styles.categoryTitle}>Student with index number <Text style={{color: 'yellow'}}>{this.state.student.index}</Text></Text>
                        </View>
                        <Text style={styles.categoryTitle}>Group: <Text style={{color: 'yellow'}}>{this.state.student.group}</Text></Text>
                        {this.generateLabsView()}
                    </ScrollView>
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
    studentContainer: {
        marginHorizontal: 10,
        marginTop: 10,
        borderWidth: 1.5,
        justifyContent: 'center',
    },
    block: {
        padding: 6,
        marginBottom: 5,
        marginTop: 15,
        backgroundColor: 'yellow'
    },
    information: {
        fontSize: 20,
        margin: 5,
        color: 'yellow',
    },
    details: {
        color: 'white'
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
    categoryTitle: {
        width: '100%',
        padding: 10,
        color: 'white',
        fontSize: 25,
        fontFamily: 'sans-serif'
    }
});

