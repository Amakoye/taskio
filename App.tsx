import { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import Navigation from "/components/Navigation";
import { LoadFont } from "/theme/font";

export default function App() {
  const [fontLoaded, setFontLoaded] = useState(false);

  useEffect(() => {
    LoadFont({ setFontLoaded });
  }, []);

  if (!fontLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <Navigation />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
