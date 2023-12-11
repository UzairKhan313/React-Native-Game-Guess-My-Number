import { StyleSheet, View, Text, Image, Dimensions } from "react-native";

import Title from "../Components/ui/Title";
import Colors from "../constants/colors";
import PrimaryButton from "../Components/ui/PrimaryButton";

export const GameOverScreen = ({roundsNumber, userNumber, onStartNewGame}) => {
  return (
    <View style={styles.rootContainer}>
      <Title>GAME OVER!</Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/success.png")}
        />
      </View>
      <View>
        <Text style={styles.summeryText}>
          Your Phone Needed <Text style={styles.highlight}> {roundsNumber} </Text> Rounds To
          Guess A Number
          <Text style={styles.highlight}> {userNumber} </Text>
        </Text>
      </View>
      <PrimaryButton onPress={onStartNewGame}>Start New Game</PrimaryButton>
    </View>
  );
};

const devicWidth = Dimensions.get("window").width;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    width: devicWidth < 380 ? 150 : 300,
    height: devicWidth < 380 ? 150 : 300,
    borderRadius: devicWidth < 380 ? 75 : 150,
    borderWidth: 3,
    borderColor: Colors.primary800,
    overflow: "hidden",
    margin: 36,
  },
  image: {
    height: "100%",
    width: "100%",
  },
  summeryText: {
    fontSize: 24,
    textAlign: "center",
    marginBottom: 24,
  },
  highlight: {
    color: Colors.primary500,
  },
});
