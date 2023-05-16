import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Button,
  Image,
} from "react-native";
import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { theme } from "../colors";
import axios from "axios";
export default function Mypage({ navigation }) {
  const get_info = async () => {
    try {
      const token = await AsyncStorage.getItem("logintoken");
      const response = await axios.get("http://192.168.145.1:3001/userinfo", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const userData = response.data;
      //await AsyncStorage.setItem('myinfo', JSON.stringify(userData));
      console.log(userData);
    } catch (error) {
      console.log(error.response?.data?.message || error.message);
    }
  };
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text></Text>
      <View>
        <Button title="OK" onPress={() => get_info()} />
        <Text>{`이름 : `}</Text>
        <Text>{`아이디 : `}</Text>
        <Text>{`이메일 : `}</Text>
        <TouchableOpacity>
          <Text>수정</Text>
        </TouchableOpacity>
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
