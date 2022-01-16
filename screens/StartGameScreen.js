import React, {useState} from 'react';
import {
    View, 
    Text, 
    StyleSheet,
    Button, 
    Keyboard, 
    TouchableWithoutFeedback,
    Alert
    } from 'react-native';
import Card from '../components/Card';
import Colors from '../constants/Colors';
import Input from '../components/Input';
import NumberContainer from '../components/NumberContainer';

const StartGameScreen = (props) => {

    const [enteredValue, setEnteredValue] = useState('');
    const [confirmed, setConfirmed] = useState(false);
    const [selectedNumber, setSelectedNumber] = useState();

    const inputNumberHandler = (input) => {
        setEnteredValue(input.replace(/[^0-9]/g,''));
    }

    const resetButtonHandler = () => {
        setEnteredValue('');
        setConfirmed(false);
    };

    const confirmButtonHandler = () => {
        const chosenNumber = parseInt(enteredValue);
        if (isNaN(chosenNumber) || chosenNumber <= 0 || chosenNumber > 99) {
            Alert.alert('Invalid Number!', 'Number has to be a number between 1 to 99!', [{text: 'Okay', style: 'destructive', onPress: resetButtonHandler}], {cancelable: true});
            return;
        }
        setConfirmed(true);
        setSelectedNumber(chosenNumber);
        setEnteredValue(''); 
        Keyboard.dismiss();
    };

    let confirmedNumber;

    if(confirmed){
        confirmedNumber = (
            <Card styles={styles.summaryContainer}>
                <Text>You Selected</Text>
                <NumberContainer>{selectedNumber}</NumberContainer>
                <Button title='Start Game' onPress={()=>{props.onStartGame(selectedNumber)}}/>
            </Card>
        );
    }

    return(
        <TouchableWithoutFeedback onPress={()=>{Keyboard.dismiss()}}>
            <View style={styles.screen}>
                <Text style={styles.title}>Start a New Game!</Text>
                <Card styles={styles.inputContainer}>
                        <Text>Select a Number</Text>
                        <Input styles={styles.input} blurOnSubmit autoCapitalize='none' autoCorrect={false} keyboardType='number-pad' maxLength={2} value={enteredValue} onChangeText={inputNumberHandler} />
                        <View style={styles.buttonContainer}>
                            <View style={styles.button}>
                                <Button title='Reset' color={Colors.secondary} onPress={resetButtonHandler}/>
                            </View>
                            <View style={styles.button}>
                                <Button title='Confirm' color={Colors.primary} onPress={confirmButtonHandler}/>
                            </View>
                        </View>
                </Card>
                {confirmedNumber}
            </View>
        </TouchableWithoutFeedback>
        
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        padding: 10,
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        marginVertical: 10,
        fontFamily: 'open-sans-bold'
    },
    inputContainer: {
        width: 300,
        maxWidth: '80%',
        alignItems: 'center',
        shadowColor: 'black',
        shadowOffset: {width: 0,height: 2},
        shadowRadius: 6,
        shadowOpacity: 0.26,
        elevation: 8,
        padding: 20,
        borderRadius: 10,
        backgroundColor: 'white'
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
        paddingHorizontal: 15
    },
    input: {
        width: 50,
        marginVertical: 10,
        textAlign: 'center',
        fontSize: 18
    },
    button: {
        width: '40%'
    },
    summaryContainer: {
        marginTop: 20,
        alignItems: 'center'
    }
});

export default StartGameScreen;