import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import { theme } from "../colors";
export default function Trash({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      {/* <Image
        source={require("../New.gif")}
        style={{ width: 180, height: 180, marginTop: 40 }}
      /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.bg,
    alignItems: "center",
  },
});
