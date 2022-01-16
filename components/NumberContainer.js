import React from 'react';
import {View, StyleSheet, Text} from 'react-native';
import Colors from '../constants/Colors';

const NumberContainer = (props) => {
    return(
        <View style={styles.container}>
            <Text style={styles.number}>{props.children}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        borderWidth: 1.5,
        borderColor: Colors.secondary,
        width: 50,
        alignItems: 'center',
        marginVertical: 10,
        borderRadius: 10,
    },
    number: {
        color: Colors.secondary,
        fontSize: 18
    }
});

export default NumberContainer;