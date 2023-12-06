import { useState } from "react";
import { StyleSheet, View, Text } from "react-native";
import Title from "../Components/ui/Title";
import NumberContainer from "../Components/game/NumberContainer";

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;
  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

function GameScreen(props) {
  const initialGuess = generateRandomBetween(1, 100, props.choosenNumber);
  const [currentGuess, setCurrenGuess] = useState(initialGuess);

  return (
    <View style={styles.screen}>
      <Title style={styles.title}>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View></View>
      <View></View>
    </View>
  );
}

module.exports = GameScreen;

const styles = StyleSheet.create({
  screen: { flex: 1, padding: 24, paddingVertical: 50 },
});
