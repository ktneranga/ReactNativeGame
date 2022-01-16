import React from 'react';
import {View, Text, StyleSheet, Button, Image} from 'react-native';
import BodyText from '../components/BodyText';
import TitleText from '../components/TitleText';

const GameOverScreen = (props) => {
    return(
        <View style={styles.screen}>
            <TitleText>The Game is Over!</TitleText>
            <View style={styles.imageContainer}>
                <Image 
                    fadeDuration={1000} 
                    // source={require('../assets/images/success.png')} 
                    source={{uri: 'https://res.cloudinary.com/dk-find-out/image/upload/q_80,w_1920,f_auto/A-Alamy-BXWK5E_vvmkuf.jpg'}} 
                    style={styles.image} 
                />
            </View>
            <BodyText>Number of rounds: {props.roundsNumber}</BodyText>
            <BodyText>Number was: {props.userNumber}</BodyText>
            <Button title='New Game' onPress={props.onRestart}/>
        </View>
    );
}

const styles = StyleSheet.create({
    screen :{
        flex: 1,
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    imageContainer: {
        width: '80%',
        height: 300,
        borderColor: 'black',
        borderWidth: 2,
        borderRadius: 200,
        overflow: 'hidden',
        marginVertical: 30
    },
    image : {
        width: '100%',
        height: '100%'
    }
});

export default GameOverScreen;