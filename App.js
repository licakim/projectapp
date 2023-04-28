import React, { useEffect } from "react";
import { View, Image } from "react-native";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import joinScreen from "./screens/Join";
import loginScreen from "./screens/Login";
import trashScreen from "./screens/Trash";
import mainScreen from "./screens/Main";
import addScreen from "./screens/Add";
import mypageScreen from "./screens/Mypage";
import { theme } from "./colors";

const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="loginScreen" component={loginScreen} />
      <Stack.Screen name="joinScreen" component={joinScreen} />
      <Stack.Screen name="mainScreen" component={mainScreen} />
      <Stack.Screen name="addScreen" component={addScreen} />
      <Stack.Screen name="trashScreen" component={trashScreen} />
      <Stack.Screen name="mypageScreen" component={mypageScreen} />
    </Stack.Navigator>
  );
};

export default function App() {
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 4000);
  }, []);

  const [loading, setLoading] = React.useState(true);

  return (
    <View style={{ flex: 1 }}>
      <StatusBar style="auto" />
      {loading ? (
        <View
          style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: theme.load,
          }}
        >
          <Image
            style={{ width: 200, height: 200 }}
            source={require("./postit.gif")}
          />
        </View>
      ) : (
        <NavigationContainer>
          <MyStack />
        </NavigationContainer>
      )}
    </View>
  );
}
