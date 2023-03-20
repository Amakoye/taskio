import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import LoginScreen from "/screens/auth/login";
import LandingScreen from "/screens/landing";
import { AuthStackParamList } from "/types/navigation";

const Stack = createNativeStackNavigator<AuthStackParamList>();

const AuthStackNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Landing" component={LandingScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AuthStackNavigation;
