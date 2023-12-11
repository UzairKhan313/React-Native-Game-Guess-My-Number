import { useState, useEffect } from "react";
import { StyleSheet, View, Text, Alert, FlatList } from "react-native";

// Importing Custom Components..
import Title from "../Components/ui/Title";
import NumberContainer from "../Components/game/NumberContainer";
import PrimaryButton from "../Components/ui/PrimaryButton";
import { Card } from "../Components/ui/Card";
import Colors from "../constants/colors";
import { GuessLogItem } from "../Components/game/GuessLogItem";

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

function GameScreen({ choosenNumber, onGameOver }) {
  const initialGuess = generateRandomBetween(1, 100, choosenNumber);
  const [currentGuess, setCurrenGuess] = useState(initialGuess);
  const [guessRound, setGuessRounds] = useState([initialGuess]);

  function nextGuessHandler(direction) {
    if (
      (direction === "lower" && currentGuess < choosenNumber) ||
      (direction === "greater" && currentGuess > choosenNumber)
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
    setGuessRounds((prevState) => [newRandNumber, ...prevState]);
  }
  useEffect(() => {
    if (currentGuess === choosenNumber) {
      onGameOver(guessRound.length);
    }
  }, [currentGuess, choosenNumber, onGameOver]);

  useEffect(() => {
    minBoundry = 1;
    maxBoundry = 100;
  }, []);

  const guessRoundsList = guessRound.length;

  return (
    <View style={styles.screen}>
      <Title style={styles.title}>Opponent's Guess</Title>
      <NumberContainer>{currentGuess}</NumberContainer>
      <Card>
        <Text style={styles.instructionText}>Higher or Lower ?</Text>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "lower")}>
              -
            </PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={nextGuessHandler.bind(this, "greater")}>
              +
            </PrimaryButton>
          </View>
        </View>
      </Card>
      <View style={styles.listContainer}>
        <FlatList
          data={guessRound}
          renderItem={(data) => (
            <GuessLogItem
              roundedNumber={guessRoundsList - data.index}
              guess={data.item}
            />
          )}
          keyExtractor={(item) => item}
        />
      </View>
    </View>
  );
}

module.exports = GameScreen;

const styles = StyleSheet.create({
  screen: { flex: 1, padding: 24, paddingVertical: 50, alignItems: "center" },
  instructionText: {
    color: Colors.accent500,
    fontSize: 20,
  },
  buttonsContainer: {
    marginTop: 20,
    flexDirection: "row",
  },
  buttonContainer: { flex: 1 },
  listContainer: {
    flex: 1,
    padding: 16,
  },
});
