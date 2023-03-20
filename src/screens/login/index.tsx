import Ionicons from "@expo/vector-icons/Ionicons";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import {
  StyleSheet,
  Switch,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import Logo from "/components/Logo";
import { RootStackParamList } from "/components/Navigation";
import { colors } from "/theme/colors";

const LoginScreen = ({ navigation }: LoginScreenProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <TouchableOpacity
          style={styles.backBtnContainer}
          onPress={() => navigation.navigation("Home")}
        >
          <Ionicons name="chevron-back-outline" size={18} color={colors.GREY} />
          <Text style={styles.backBtnText}>Back</Text>
        </TouchableOpacity>
        <Logo />
      </View>
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
          <TextInput style={styles.input} placeholder="Password" />
        </View>

        {/* save password */}
        <View style={styles.savePasswordContainer}>
          <Text style={styles.savePasswordText}>Save Password</Text>
          <Switch style={styles.savePasswordSwitch} />
        </View>

        {/* Buttons */}
        <TouchableOpacity style={styles.loginBtn}>
          <Text style={{ ...styles.btnText, color: "#fff" }}>LOG IN</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.signupBtn}>
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
  topContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: 20,
    paddingRight: 20,
  },
  backBtnContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  backBtnText: {
    fontFamily: "varela-round",
    fontSize: 18,
    color: colors.GREY,
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
  },
  input: {
    fontFamily: "varela-round",
    fontSize: 18,
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
    fontSize: 20,
    textAlign: "center",
  },
});

type LoginScreenNavigationProp = NativeStackScreenProps<
  RootStackParamList,
  "Home"
>;

type LoginScreenProps = {
  navigation: LoginScreenNavigationProp;
};

export default LoginScreen;
