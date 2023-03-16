import * as Font from "expo-font";
import { useEffect, useMemo } from "react";
import { Text as RNText } from "react-native";

const Text = ({ children }: TextProps) => {
  const LoadFont = async () => {
    await Font.loadAsync({
      "varela-round": require("../assets/fonts/VarelaRound.ttf"),
    });
  };

  const loadFont = useMemo(() => {
    LoadFont();
  }, []);

  useEffect(() => {
    loadFont;
  }, []);

  return <RNText style={{ fontFamily: "varela-round" }}>{children}</RNText>;
};

type TextProps = {
  children: string;
  style?: CSSRuleList | CSSRule;
};

export default Text;
