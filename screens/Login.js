import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useEffect, useState } from "react";
export default function Login({ navigation }) {
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");
  // const [loginInfo, setLoginInfo] = useState({ id: "", pw: "" });
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={styles.header}>?</Text>
      <View>
        <TextInput
          onChangeText={(id) => setId(id)}
          value={id}
          returnKeyType="done"
          placeholder="ID"
          style={{ ...styles.input, marginTop: 60 }}
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
          if (id !== "" && pw !== "") navigation.navigate("mainScreen");
          else if (id === "") alert("아이디를 입력하세요");
          else if (pw === "") alert("비밀번호를 입력하세요");
        }}
      >
        <Text style={{ ...styles.btnText, color: "#5C5C60" }}>login</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("joinScreen")}>
        <Text style={{ ...styles.btnText, color: "grey" }}>create account</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "beige",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {},
  input: {
    backgroundColor: "grey",
    paddingVertical: 12,
    paddingHorizontal: 80,
    borderRadius: 15,
    marginVertical: 10,
    fontSize: 18,
  },
  btnText: {
    fontSize: 18,
    marginTop: 2,
  },
});
