import { StyleSheet, View, Text } from "react-native";
import Title from "../Components/Title";

function GameScreen() {
  return (
    <View style={styles.screen}>
      <Title style={styles.title}>Opponent's Guess</Title>
      <View></View>
      <View></View>
    </View>
  );
}

module.exports = GameScreen;

const styles = StyleSheet.create({
  screen: { flex: 1, padding: 24, paddingVertical: 50 },
});
