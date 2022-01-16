//app.js is the first file loaded when the app is started, so we need to load fonts in the app.js file
import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import * as Font from 'expo-font';
// import { AppLoading } from 'expo';

import Header from './components/Header';
import GameScreen from './screens/GameScreen';
import StartGameScreen from './screens/StartGameScreen';
import GameOverScreen from './screens/GameOverScreen';

export default function App() {

const [userNumber, setUserNumber] = useState();
const [guessRounds, setGuessRounds] = useState(0);


const configureNewGameHandler = () => {
  setGuessRounds(0);
  setUserNumber(null);
}

const startGameHandler = (selectedNumber) => {
  setUserNumber(selectedNumber);
  setGuessRounds(0);
}

const gameOverHandler = (numOfRounds) => {
  setGuessRounds(numOfRounds);
}

let content = <StartGameScreen onStartGame={startGameHandler} />;

if(userNumber && guessRounds <= 0){
  content = <GameScreen userChoice={userNumber} onGameOver={gameOverHandler}/>;
}else if(guessRounds > 0) {
  content = <GameOverScreen userNumber={userNumber} roundsNumber={guessRounds} onRestart={configureNewGameHandler}/>
}

  return (
    <View style={styles.screen}>
     <Header title="Guess a Number"/>
      {content}
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1
  }
});