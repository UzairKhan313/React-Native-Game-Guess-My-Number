import { useState } from "react";
import {
  StyleSheet,
  View,
  TextInput,
  Alert,
  Text,
  Dimensions,
  useWindowDimensions,
  KeyboardAvoidingView,
  ScrollView,
} from "react-native";
import Title from "../Components/ui/Title";
import PrimaryButton from "../Components/ui/PrimaryButton";
import { Card } from "../Components/ui/Card";
import Colors from "../constants/colors";

function GameStartScreen({ onPickNumber }) {
  const [enteredNumber, setEnteredNumber] = useState("");

  // Any code which interact with the screen orientation will kept in the component code.
  // when the orientation is changed this components code wil be excuted.

  // This hooks is used to get the heigth and width of the Screen when orientation is changed.
  const { width, height } = useWindowDimensions();

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

    onPickNumber(choosenNmber);
  }

  const marginTopDistance = height < 380 ? 30 : 100;
  return (
    <ScrollView style={styles.keyboardScreen}>
      <KeyboardAvoidingView style={styles.keyboardScreen} behavior="position">
        <View style={[styles.rootContainer, { marginTop: marginTopDistance }]}>
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
                <PrimaryButton onPress={confrimInputHandler}>
                  Confirm
                </PrimaryButton>
              </View>
            </View>
          </Card>
        </View>
      </KeyboardAvoidingView>
    </ScrollView>
  );
}
module.exports = GameStartScreen;

// Window screen mean all screen without the status bar.
// This code is excuted once when the app is started. it not excuted when the orientation is changed.
// const devicHeigth = Dimensions.get("window").height

const styles = StyleSheet.create({
  keyboardScreen: {
    flex: 1,
  },
  rootContainer: {
    flex: 1,
    // marginTop: devicHeigth < 380 ? 30 : 100,
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
