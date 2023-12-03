import { View, Text } from "react-native";

function PrimaryButton({ children }) {
  return (
    <View>
      <Text>{children}</Text>
    </View>
  );
}
module.exports = PrimaryButton;
