import { StyleSheet, Text, Platform } from "react-native";
import Colors from "../../constants/colors";

function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}
module.exports = Title;

const styles = StyleSheet.create({
  title: {
    // fontFamily: "open-sans-bold",
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
    // borderWidth: Platform.OS === "android" ? 2 : 0,
    borderWidth : Platform.select({android:0, ios:2}),
    borderColor: Colors.accent500,
    padding: 12,
    maxWidth:"800%"
  },
});
