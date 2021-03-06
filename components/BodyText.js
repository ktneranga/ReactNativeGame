import React from 'react'
import {Text, StyleSheet} from 'react-native'

const BodyText = (props) => {
    return(
        <Text style={{...styles.body, ...props.styles}}>{props.children}</Text>
    );
}

const styles = StyleSheet.create({
    body: {
        fontFamily: 'open-sans-regular'
    }
});

export default BodyText;