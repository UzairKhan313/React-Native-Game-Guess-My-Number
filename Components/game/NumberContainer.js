import { StyleSheet, View, Text, Dimensions } from "react-native";
import Colors from "../../constants/colors";

function NumberContainer({ children }) {
  return (
    <View style={styles.container}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
}

const devicWidth = Dimensions.get("window").width;

module.exports = NumberContainer;
const styles = StyleSheet.create({
  container: {
    borderWidth: 2,
    borderColor: Colors.accent500,
    padding: devicWidth < 380 ? 12 : 24,
    margin: devicWidth < 380 ? 12 : 24,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
  },
  numberText: {
    color: Colors.accent500,
    fontSize: devicWidth < 380 ? 28 : 36,
    // fontWeight: "bold",
    // fontFamily: "open-sans-bold",
  },
});
