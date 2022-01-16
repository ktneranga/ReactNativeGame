import React from 'react';
import {TextInput, StyleSheet} from 'react-native';

const Input = (props) => {
    return(
        <TextInput {...props} style={{ ...styles.input, ...props.styles }}/>
    );
}

const styles = StyleSheet.create({
    input: {
        borderBottomWidth: 1.5,
        borderColor: 'grey'
    }
});

export default Input;