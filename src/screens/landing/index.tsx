import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Logo from "/components/Logo";
import { colors } from "/theme/colors";

const LandingScreen = () => {
  return (
    <View style={styles.container}>
      <Logo />
      <View style={styles.imageContainer}>
        <Image
          source={require("../../assets/images/landing-image.png")}
          style={styles.image}
        />
      </View>
      <View>
        <Text style={styles.heading}>Smart Task Management</Text>
        <Text style={styles.paragraph}>
          This smart tool is designed to help you better manage your task
        </Text>

        <TouchableOpacity style={styles.loginBtn}>
          <Text style={styles.btnText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.signupBtn}>
          <Text style={{ ...styles.btnText, color: "#fff" }}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  imageContainer: {
    height: "50%",
    margin: 30,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  heading: {
    fontFamily: "varela-round",
    fontSize: 36,

    marginVertical: 10,
  },
  paragraph: {
    fontSize: 20,
    fontFamily: "varela-round",
    color: colors.GREY,
  },
  loginBtn: {
    borderColor: colors.GREY,
    borderWidth: 0.5,
    padding: 15,
    borderRadius: 10,
    marginTop: 20,
  },
  signupBtn: {
    padding: 15,
    borderRadius: 10,
    marginTop: 10,
    backgroundColor: colors.PRIMARY,
  },
  btnText: {
    fontFamily: "varela-round",
    fontSize: 20,
    textAlign: "center",
    textTransform: "uppercase",
  },
});

export default LandingScreen;
