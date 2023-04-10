import { StatusBar } from "expo-status-bar";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";

//import { createStackNavigator } from "@react-navigation/stack";
import joinScreen from "./screens/Join";
import loginScreen from "./screens/Login";
import mainScreen from "./screens/Main";

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="loginScreen" component={loginScreen} />
        <Stack.Screen name="joinScreen" component={joinScreen} />
        <Stack.Screen name="mainScreen" component={mainScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MyStack;
