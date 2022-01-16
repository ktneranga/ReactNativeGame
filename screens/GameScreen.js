import React, { useState, useRef, useEffect } from 'react';
import {View, Text, StyleSheet, Button, Alert} from 'react-native';
import Card from '../components/Card';
import NumberContainer from '../components/NumberContainer';

const generateRandomBetween = (min, max, exclude) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    const rndNum = Math.floor(Math.random() * (max - min)) + min;
    if (rndNum === exclude) {
        return generateRandomBetween(min, max, exclude);
    }else{
        return rndNum;
    }
}

const GameScreen = (props) => {
    const [currentGuess, setCurrentGuess] = useState(generateRandomBetween(1, 100, props.userChoice));

    const [rounds, setRounds] = useState(0);

    const currentLow = useRef(1);
    const currentHigh = useRef(100);

    //props destructuring
    const {userChoice, onGameOver} = props;

    const nextGuessHandler = (direction) => {
        if ((direction === 'lower' && currentGuess < props.userChoice)||(direction === 'higher' && currentGuess > props.userChoice)){
            Alert.alert("Don't lie!", "You know that this is wrong...", [{
                text: 'Sorry!',
                style: 'cancel'
            },{ cancelable: true}]);
            return;
        } 
        if(direction === 'lower'){
            currentHigh.current = currentGuess;
        }else{
            currentLow.current = currentGuess;
        }
        const nextNumber = generateRandomBetween(currentLow.current, currentHigh.current, currentGuess );
        setCurrentGuess(nextNumber);
        setRounds(curRounds => curRounds + 1);
    }

    useEffect(()=>{
        if(currentGuess === userChoice){
            onGameOver(rounds);
        }
    }, [currentGuess, userChoice, onGameOver]);

    return(
        <View style={styles.screen}>
            <Text>Opponent's Guess</Text>
            <NumberContainer>{currentGuess}</NumberContainer>
            <Card styles={styles.buttonContainer}>
                <Button title="LOWER" onPress={nextGuessHandler.bind(this, 'lower')} />
                <Button title="HIGHER" onPress={nextGuessHandler.bind(this, 'higher')}/>
            </Card>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    buttonContainer: {
        flexDirection: 'row',
        width: 300,
        maxWidth: '80%',
        justifyContent: 'space-between',
        marginTop: 20,
    }
});

export default GameScreen;