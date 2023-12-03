import { StyleSheet } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

import GameStartScreen from "./screens/GameStartScreen";

export default function App() {
  return (
    <LinearGradient colors={["#4e0329", "#ddb52f"]} style={styles.rootScreen}>
      <GameStartScreen />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: { flex: 1 },
});
