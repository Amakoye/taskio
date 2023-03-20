import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { useState } from "react";
import {
  StyleSheet,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import AuthHeader from "../AuthHeader";
import { colors } from "/theme/colors";

const SignUpScreen = () => {
  const navigation = useNavigation();

  const [state, setState] = useState<SignupScreenState>({
    isEnabled: false,
  });

  const toggleSwitch = () => {
    setState((prev) => ({ ...prev, isEnabled: !prev.isEnabled }));
  };

  return (
    <View style={styles.container}>
      <AuthHeader screen="Landing" />
      <View style={styles.mainContainer}>
        <Text style={styles.title}>Sign Up</Text>
        <Text style={styles.paragraph}>
          Create an account &{"\n"}Manage your task
        </Text>
        {/* input fields */}
        <View style={styles.inputContainer}>
          <Ionicons style={styles.inputIcon} name="person-outline" size={18} />
          <TextInput style={styles.input} placeholder="Username" />
        </View>
        <View style={styles.inputContainer}>
          <Ionicons style={styles.inputIcon} name="mail-outline" size={18} />
          <TextInput style={styles.input} placeholder="Email" />
        </View>
        <View style={styles.inputContainer}>
          <Ionicons style={styles.inputIcon} name="eye-off-outline" size={18} />
          <TextInput
            secureTextEntry
            style={styles.input}
            placeholder="Password"
          />
        </View>

        {/* save password */}
        <View style={styles.savePasswordContainer}>
          <Text style={styles.savePasswordText}>Save Password</Text>
          <Switch
            trackColor={{ true: colors.SUCCESS, false: colors.GREY }}
            thumbColor={state.isEnabled ? colors.SUCCESS : "#f4f3f4"}
            onValueChange={toggleSwitch}
            value={state.isEnabled}
          />
        </View>

        {/* Buttons */}
        <TouchableOpacity style={styles.signupBtn}>
          <Text style={{ ...styles.btnText, color: "#fff" }}>SIGN UP</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.loginBtn}
          onPress={() => navigation.navigate("Login")}
        >
          <Text style={styles.btnText}>Already have an account? LOGIN</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 40,
  },
  mainContainer: {
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 50,
  },
  title: {
    fontSize: 20,
    fontFamily: "varela-round",
    marginBottom: 10,
  },
  paragraph: {
    fontSize: 16,
    fontFamily: "varela-round",
    color: colors.GREY,
    lineHeight: 21,
    marginBottom: 10,
  },
  inputContainer: {
    marginTop: 20,
    marginBottom: 20,
  },
  input: {
    fontFamily: "varela-round",
    fontSize: 16,
    borderColor: colors.GREY,
    borderBottomWidth: 0.5,
    width: "100%",
  },
  inputIcon: {
    position: "absolute",
    right: 10,
    bottom: 5,
    color: colors.GREY,
  },
  savePasswordContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 20,
  },
  savePasswordText: {
    fontSize: 16,
    fontFamily: "varela-round",
    color: colors.SUCCESS,
  },
  savePasswordSwitch: {},
  signupBtn: {
    padding: 15,
    borderRadius: 10,
    marginTop: 10,
    backgroundColor: colors.PRIMARY,
  },
  loginBtn: {
    borderColor: colors.GREY,
    borderWidth: 0.5,
    padding: 15,
    borderRadius: 10,
    marginTop: 15,
  },
  btnText: {
    fontFamily: "varela-round",
    fontSize: 18,
    textAlign: "center",
  },
});

type SignupScreenState = {
  isEnabled: boolean;
};

export default SignUpScreen;
