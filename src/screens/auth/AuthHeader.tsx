import Ionicons from "@expo/vector-icons/Ionicons";
import { useNavigation } from "@react-navigation/native";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Logo from "/components/Logo";
import { colors } from "/theme/colors";
import { RootStackParamList } from "/types/navigation";

const AuthHeader = ({ screen }: AuthHeaderProps) => {
  const navigation = useNavigation();
  return (
    <View style={styles.topContainer}>
      <TouchableOpacity
        style={styles.backBtnContainer}
        onPress={() => navigation.navigate(screen)}
      >
        <Ionicons name="chevron-back-outline" size={18} color={colors.GREY} />
        <Text style={styles.backBtnText}>Back</Text>
      </TouchableOpacity>
      <Logo />
    </View>
  );
};

const styles = StyleSheet.create({
  topContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingLeft: 14,
    paddingRight: 14,
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
});

type AuthHeaderProps = {
  screen: keyof RootStackParamList;
};

export default AuthHeader;
