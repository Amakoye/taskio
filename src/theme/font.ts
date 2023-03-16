import * as Font from "expo-font";

const LoadFont = async ({ setFontLoaded }: LoadFontParams) => {
  await Font.loadAsync({
    "varela-round": require("../assets/fonts/VarelaRound.ttf"),
  });
  setFontLoaded(true);
};

type LoadFontParams = {
  setFontLoaded: React.Dispatch<React.SetStateAction<boolean>>;
};

export { LoadFont };
