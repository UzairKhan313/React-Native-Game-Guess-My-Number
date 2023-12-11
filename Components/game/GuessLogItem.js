import { StyleSheet, View, Text } from "react-native";
import Colors from "../../constants/colors";

export const GuessLogItem = ({ roundedNumber, guess }) => {
  return (
    <View style={styles.logItem}>
      <Text>#{roundedNumber}</Text>
      <Text>Opponent's Guess: {guess}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  logItem: {
    borderColor: Colors.primary800,
    borderWidth: 1,
    borderRadius: 40,
    padding: 12,
    marginVertical: 8,
    backgroundColor: Colors.accent500,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    elevation: 4,
    shadowColor: "black",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.25,
    shadowRadius: 3,
  },
});
