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

const LoginScreen = () => {
  const navigation = useNavigation();

  const [state, setState] = useState<LoginScreenState>({
    isEnabled: false,
  });

  const toggleSwitch = () => {
    setState((prev) => ({ ...prev, isEnabled: !prev.isEnabled }));
  };

  return (
    <View style={styles.container}>
      <AuthHeader screen="Landing" />
      <View style={styles.mainContainer}>
        <Text style={styles.title}>Welcome Back!</Text>
        <Text style={styles.paragraph}>
          Log in your account & Manage {"\n"}your task
        </Text>

        {/* Input fields */}
        <View style={styles.inputContainer}>
          <Ionicons style={styles.inputIcon} name="person-outline" size={18} />
          <TextInput style={styles.input} placeholder="Username" />
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
        <TouchableOpacity style={styles.loginBtn}>
          <Text style={{ ...styles.btnText, color: "#fff" }}>LOG IN</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.signupBtn}
          onPress={() => navigation.navigate("Signup")}
        >
          <Text style={styles.btnText}>Don't have an account? SIGN UP</Text>
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
    paddingTop: 40,
  },
  title: {
    fontSize: 20,
    fontFamily: "varela-round",
  },
  paragraph: {
    fontSize: 16,
    fontFamily: "varela-round",
    color: colors.GREY,
    lineHeight: 20,
    marginVertical: 10,
    marginBottom: 20,
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
    height: 40,
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
  loginBtn: {
    padding: 15,
    borderRadius: 10,
    marginTop: 10,
    backgroundColor: colors.PRIMARY,
  },
  signupBtn: {
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

type LoginScreenState = {
  isEnabled: boolean;
};

export default LoginScreen;
