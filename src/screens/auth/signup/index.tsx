import { StyleSheet, View } from "react-native";
import AuthHeader from "../AuthHeader";

const SignUpScreen = () => {
  return (
    <View style={styles.container}>
      <AuthHeader screen="Landing" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
  },
});

export default SignUpScreen;
