import { StyleSheet, Text, View } from "react-native";

import { colors } from "/theme/colors";

const Logo = () => {
  return (
    <View style={styles.container}>
      <View style={styles.logoIconContainer}>
        <Text style={styles.logoIconText}>t</Text>
      </View>
      <Text style={{ ...styles.logoText, fontFamily: "varela-round" }}>
        taskio
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
    marginTop: 20,
    fontFamily: "varela-round",
  },
  logoIconContainer: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.PRIMARY,
    borderRadius: 12,
    height: 30,
    width: 30,
    transform: [{ rotate: "45deg" }],
  },
  logoIconText: {
    color: "#fff",
    fontSize: 25,
    fontFamily: "varela-round",
    transform: [{ rotate: "-45deg" }],
  },
  logoText: {
    color: colors.PRIMARY,
    opacity: 0.8,
    letterSpacing: 1,
    fontSize: 25,
  },
});

export default Logo;
