import { useState } from "react";
import { StyleSheet, View, TextInput, Alert, Text } from "react-native";
import Title from "../Components/ui/Title";
import PrimaryButton from "../Components/ui/PrimaryButton";
import { Card } from "../Components/ui/Card";
import Colors from "../constants/colors";

function GameStartScreen({ onPickNumber }) {
  const [enteredNumber, setEnteredNumber] = useState("");

  function inputNumberHandler(enteredText) {
    setEnteredNumber(enteredText);
  }
  function resetInputHandler() {
    setEnteredNumber("");
  }

  function confrimInputHandler() {
    const choosenNmber = parseInt(enteredNumber);
    if (isNaN(choosenNmber) || choosenNmber < 0 || choosenNmber > 99) {
      Alert.alert(
        "Invalid Input Number",
        "Number has to be a Number between 1 and 99",
        [{ text: "Okey", style: "destructive", onPress: resetInputHandler }]
      );
      return;
    }
    console.log("Console Valid Number :  ", choosenNmber);
    onPickNumber(choosenNmber);
  }
  return (
    <View style={styles.rootContainer}>
      <Title>Guess My Number</Title>
      <Card>
        <Text style={styles.instructionText}>Enter a Number</Text>
        <TextInput
          style={styles.numberInput}
          maxLength={2}
          keyboardType="number-pad"
          autoCorrect={false}
          onChangeText={inputNumberHandler}
          value={enteredNumber}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
          </View>
          <View style={styles.buttonContainer}>
            <PrimaryButton onPress={confrimInputHandler}>Confirm</PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
}
module.exports = GameStartScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    marginTop: 100,
    alignItems: "center",
  },
  instructionText: {
    // fontFamily: "open-sans",
    color: Colors.accent500,
    fontSize: 20,
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: Colors.accent500,
    color: Colors.accent500,
    borderBottomWidth: 2,
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonsContainer: {
    flexDirection: "row",
  },
  buttonContainer: { flex: 1 },
});
