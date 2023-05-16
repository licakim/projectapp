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
  const [myInfo, setMyInfo] = useState({});

  useEffect(() => {
    const fetchMyInfo = async () => {
      const myInfoJson = await AsyncStorage.getItem("myinfo");
      const myInfo = JSON.parse(myInfoJson);
      setMyInfo(myInfo);
    };

    fetchMyInfo();
  }, []);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text></Text>
      <View>
        <Text>{`이름 :${myInfo.name}`}</Text>
        <Text>{`아이디 :${myInfo.id} `}</Text>
        <Text>{`닉네임 :${myInfo.nickname} `}</Text>
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
