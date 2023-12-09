import { useState } from "react";
import { StyleSheet, View, Text, Alert } from "react-native";
import Title from "../Components/ui/Title";
import NumberContainer from "../Components/game/NumberContainer";
import PrimaryButton from "../Components/ui/PrimaryButton";

function generateRandomBetween(min, max, exclude) {
  const rndNum = Math.floor(Math.random() * (max - min)) + min;
  if (rndNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return rndNum;
  }
}

let minBoundry = 1;
let maxBoundry = 100;

function GameScreen(props) {
  const initialGuess = generateRandomBetween(
    minBoundry,
    maxBoundry,
    props.choosenNumber
  );
  const [currentGuess, setCurrenGuess] = useState(initialGuess);

  function nextGuessHandler(direction) {
    if (
      (direction === "lower" && currentGuess < props.choosenNumber) ||
      (direction === "greater" && currentGuess > props.choosenNumber)
    ) {
      Alert.alert("Don't Lie!.", "You Know this is wrong...", [
        { text: "Sorry", style: "cancel" },
      ]);
      return;
    }
    if (direction === "lower") {
      maxBoundry = currentGuess;
    } else {
      minBoundry = currentGuess + 1;
    }
    const newRandNumber = generateRandomBetween(
      minBoundry,
      maxBoundry,
      currentGuess
    );
    setCurrenGuess(newRandNumber);
  }

  return (
    <View style={styles.screen}>
      <Title style={styles.title}>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <View>
        <Text>Higher or Lower ?</Text>
      </View>
      <View>
        <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
          -
        </PrimaryButton>
        <PrimaryButton onPress={nextGuessHandler.bind(this, "greater")}>
          +
        </PrimaryButton>
      </View>
    </View>
  );
}

module.exports = GameScreen;

const styles = StyleSheet.create({
  screen: { flex: 1, padding: 24, paddingVertical: 50 },
});
