import { View, TextInput } from "react-native";
import PrimaryButton from "../Components/PrimaryButton";

function GameStartScreen() {
  return (
    <View>
      <TextInput />
      <PrimaryButton>Reset</PrimaryButton>
      <PrimaryButton>Confirm</PrimaryButton>
    </View>
  );
}
module.exports = GameStartScreen;
