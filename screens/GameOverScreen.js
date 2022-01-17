import React from 'react';
import {View, Text, StyleSheet, Button, Image} from 'react-native';
import BodyText from '../components/BodyText';
import TitleText from '../components/TitleText';
import Colors from '../constants/Colors';

const GameOverScreen = (props) => {
    return(
        <View style={styles.screen}>
            <TitleText>The Game is Over!</TitleText>
            <View style={styles.imageContainer}>
                <Image 
                    fadeDuration={1000} 
                    source={require('../assets/images/success.png')} 
                    // source={{uri: 'https://res.cloudinary.com/dk-find-out/image/upload/q_80,w_1920,f_auto/A-Alamy-BXWK5E_vvmkuf.jpg'}} 
                    style={styles.image} 
                />
            </View>
            <View style={styles.resultContainer}>
                <BodyText styles={styles.resultText}>Your phone needed{' '}
                    <Text style={styles.highlight}>{props.roundsNumber}</Text> rounds to guess number <Text style={styles.highlight}>{props.userNumber}</Text>
                </BodyText>
            </View>
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
    },
    highlight: {
        color : Colors.primary
    },
    resultContainer: {
        width: '80%',
        marginHorizontal: 20,
        marginVertical: 15
    },
    resultText: {
        textAlign: 'center',
        fontSize: 20
    }
});

export default GameOverScreen;