import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  Image,
  Alert,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { useEffect, useState } from "react";
//import Swal from "sweetalert2";
import { theme } from "../colors";
import axios from "axios";
export default function Login({ navigation }) {
  const [loading, setLoading] = useState(false);
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const oneButtonAlert = (title, Msg) =>
    Alert.alert(title, Msg, [
      { text: "OK", onPress: () => console.log("OK Pressed") },
    ]);

  const get_info = async () => {
    try {
      const token = await AsyncStorage.getItem("logintoken");
      const response = await axios.get("http://192.168.145.1:3001/userinfo", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const userData = response.data;
      await AsyncStorage.setItem("myinfo", JSON.stringify(userData));
      console.log(userData);
    } catch (error) {
      console.log(error.response?.data?.message || error.message);
    }
  };

  const logIn = async () => {
    try {
      const response = await axios.post("http://192.168.145.1:3001/login", {
        id: id,
        pw: pw,
      });
      const token = response.data.token;
      // const token = jwt.sign({ id: id }, "mysecretkey");
      await AsyncStorage.setItem("logintoken", token);
      get_info();
      // await AsyncStorage.setItem("loginid", id);
      navigation.navigate("mainScreen");
    } catch (error) {
      oneButtonAlert("", error.response.data.message);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Image
        source={require("../logo.png")}
        style={{ width: 120, height: 120, resizeMode: "cover" }}
      />
      <View>
        <TextInput
          onChangeText={(id) => setId(id)}
          value={id}
          returnKeyType="done"
          placeholder="ID"
          style={{ ...styles.input, marginTop: 25 }}
        />
        <TextInput
          onChangeText={(pw) => setPw(pw)}
          secureTextEntry={true}
          value={pw}
          returnKeyType="done"
          placeholder="PW"
          style={styles.input}
        />
      </View>
      <TouchableOpacity
        onPress={() => {
          if (id !== "" && pw !== "") logIn();
          //if (id !== "" && pw !== "") Login();
          else if (id === "") oneButtonAlert("", "아이디를 입력하세요");
          else if (pw === "") oneButtonAlert("", "비밀번호를 입력하세요");
        }}
      >
        <Text style={{ fontSize: 18, color: "#5C5C60", marginTop: 5 }}>
          login
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("joinScreen")}>
        <Text style={{ ...styles.btnText, color: "grey" }}>create account</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={{ color: "grey", fontSize: 15 }}>forgot password?</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.load,
    alignItems: "center",
    justifyContent: "center",
  },
  header: {},
  input: {
    backgroundColor: "white",
    borderColor: "lightgrey",
    borderWidth: 1,
    paddingVertical: 12,
    paddingHorizontal: 80,
    borderRadius: 15,
    marginVertical: 10,
    fontSize: 18,
  },
  btnText: {
    fontSize: 15,
    marginTop: 2,
  },
});
