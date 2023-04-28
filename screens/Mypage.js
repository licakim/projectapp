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
export default function Mypage({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View></View>
      <View>
        <Text>{`이름 : `}</Text>
        <Text>{`아이디 : `}</Text>
        <Text>{`이메일 : `}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.bg,
    alignItems: "center",
    justifyContent: "center",
  },
});
