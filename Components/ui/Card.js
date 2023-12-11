import { StyleSheet, View, Dimensions } from "react-native";
import Colors from "../../constants/colors";
export const Card = ({ children }) => {
  return <View style={styles.card}>{children}</View>;
};

const devicWidth = Dimensions.get("window").width;
const styles = StyleSheet.create({
  card: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: devicWidth < 380 ? 18 : 36,
    padding: 16,
    marginHorizontal: 24,
    backgroundColor: Colors.primary800,
    borderRadius: 8,
    elevation: 4, // Elevation is used to Setting up Showdow on Android.
    // For IOS the Following Properties is used to settup the shadow.
    shadowColor: "black",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.25,
  },
});
