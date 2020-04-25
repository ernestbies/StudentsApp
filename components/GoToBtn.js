import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

export const GoToBtn = ({screenName, onPress}) => {
  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity onPress={onPress}>
        <Text style={styles.btnText}>{screenName}</Text>
      </TouchableOpacity>
    </View>
  )
};

const styles = StyleSheet.create({
  mainContainer: {
    margin: 5,
    borderTopWidth: 1,
    borderColor: '#333',
    backgroundColor: 'rgba(44,44,44,0.5)'
  },
  btnText: {
    paddingVertical: 5,
    paddingLeft: 15,
    fontSize: 23,
    fontFamily: 'sans-serif',
    color: '#999'
  }
});
