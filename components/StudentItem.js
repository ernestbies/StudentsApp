import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export const StudentItem = ({click, item}) => {
    return (
        <View>
            <TouchableOpacity key={item.index} onPress={click} style={styles.container}>
                <View style={{flex: 1}}>
                    <View style={styles.header}>
                        <Text style={[styles.information, {color: 'black'}]}>{item.index}</Text>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <View style={{flexDirection: 'column'}}>
                            <Text style={styles.information}>Lecture points: <Text
                                style={styles.details}>{item.lecturePoints}</Text></Text>
                            <Text style={styles.information}>Homework points: <Text
                                style={styles.details}>{item.homeworkPoints}</Text></Text>
                        </View>
                        <View style={{flexDirection: 'column'}}>
                            <Text style={styles.information}>Presence: <Text
                                style={styles.details}>{item.presenceCounter}</Text></Text>
                            <Text style={styles.information}>Absence: <Text
                                style={styles.details}>{item.absenceCounter}</Text></Text>
                        </View>
                    </View>
                    <View style={{flexDirection: 'row', justifyContent: 'center'}}>
                        <View style={{width: 85, height: 85}}>
                            <Text style={[styles.itemElement, {
                                backgroundColor: 'green',
                                color: 'white',
                            }]}>Group {"\n"} <Text style={styles.itemDetailsElement}>{item.group}</Text></Text>
                        </View>
                        <View style={{width: 85, height: 85}}>
                            <Text style={[styles.itemElement, {
                                backgroundColor: 'blue',
                                color: 'white',
                            }]}>Mark {"\n"} <Text style={styles.itemDetailsElement}>{item.mark}</Text></Text>
                        </View>
                        <View style={{width: 85, height: 85}}>
                            <Text style={[styles.itemElement, {
                                backgroundColor: 'red',
                                color: 'white',
                            }]}>Points {"\n"} <Text style={styles.itemDetailsElement}>{item.allPoints}</Text></Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 10,
        marginTop: 10,
        borderWidth: 1.5,
        flexDirection: 'row',
        justifyContent: 'center',
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'center',
        backgroundColor: 'orange'
    },
    information: {
        fontSize: 20,
        marginTop: 10,
        marginHorizontal: 10,
        color: 'yellow',
    },
    itemElement: {
        backgroundColor: 'green',
        width: 70,
        height: 70,
        color: 'white',
        fontSize: 15,
        textAlignVertical: 'center',
        textAlign: 'center',
        borderRadius: 50,
        margin: 10,
    },
    itemDetailsElement: {
        fontSize: 18,
        fontWeight: 'bold'
    },
    details: {
        color: 'white'
    },
    tagsTxt: {
        fontSize: 18,
        fontFamily: 'OpenSans-Regular'
    },
    descriptionTxt: {
        fontSize: 16,
        fontFamily: 'Roboto-BoldItalic'
    },
});
